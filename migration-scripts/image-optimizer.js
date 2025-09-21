#!/usr/bin/env node

/**
 * Image Optimization Script for Migration
 *
 * Optimizes images from Squarespace export for the new Next.js site
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const SOURCE_DIR = './migration-assets/images';
const OUTPUT_DIR = './public/images';
const OPTIMIZATION_CONFIG = {
  team: { width: 400, height: 400, quality: 85, format: 'webp' },
  news: { width: 1200, height: 630, quality: 80, format: 'webp' },
  sponsors: { width: 300, height: 150, quality: 90, format: 'png' },
  general: { width: 1200, quality: 80, format: 'webp' }
};

// Ensure directories exist
function ensureDirectories() {
  const dirs = [
    path.join(OUTPUT_DIR, 'team'),
    path.join(OUTPUT_DIR, 'news'),
    path.join(OUTPUT_DIR, 'sponsors'),
    path.join(OUTPUT_DIR, 'cars'),
    path.join(OUTPUT_DIR, 'gallery')
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Get image category from filename or path
function getImageCategory(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  const pathSegments = filePath.toLowerCase().split(path.sep);

  if (pathSegments.includes('team') || fileName.includes('team') || fileName.includes('member')) {
    return 'team';
  }
  if (pathSegments.includes('news') || fileName.includes('news') || fileName.includes('blog')) {
    return 'news';
  }
  if (pathSegments.includes('sponsor') || fileName.includes('sponsor') || fileName.includes('partner')) {
    return 'sponsors';
  }
  if (pathSegments.includes('car') || fileName.includes('car') || fileName.includes('vehicle')) {
    return 'cars';
  }
  return 'general';
}

// Generate web-friendly filename
function generateWebFilename(originalPath, category) {
  const ext = path.extname(originalPath);
  const baseName = path.basename(originalPath, ext);

  // Clean filename for web
  const cleanName = baseName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const config = OPTIMIZATION_CONFIG[category] || OPTIMIZATION_CONFIG.general;
  const newExt = config.format === 'webp' ? '.webp' :
                 config.format === 'png' ? '.png' : '.jpg';

  return `${cleanName}${newExt}`;
}

// Optimize single image
async function optimizeImage(inputPath, outputPath, category) {
  try {
    const config = OPTIMIZATION_CONFIG[category] || OPTIMIZATION_CONFIG.general;
    let pipeline = sharp(inputPath);

    // Resize if dimensions specified
    if (config.width && config.height) {
      pipeline = pipeline.resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      });
    } else if (config.width) {
      pipeline = pipeline.resize(config.width, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Apply format and quality
    if (config.format === 'webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    } else if (config.format === 'png') {
      pipeline = pipeline.png({ quality: config.quality });
    } else {
      pipeline = pipeline.jpeg({ quality: config.quality });
    }

    await pipeline.toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compressionRatio = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${compressionRatio}% smaller)`);

    return {
      original: inputPath,
      optimized: outputPath,
      originalSize: inputStats.size,
      optimizedSize: outputStats.size,
      compressionRatio: parseFloat(compressionRatio)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Process all images in directory
async function processDirectory(sourceDir) {
  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️  Source directory not found: ${sourceDir}`);
    console.log('Please create the directory and add your images from Squarespace export');
    return;
  }

  const results = {
    processed: 0,
    failed: 0,
    totalOriginalSize: 0,
    totalOptimizedSize: 0,
    files: []
  };

  function processDirectoryRecursive(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        processDirectoryRecursive(fullPath);
      } else if (isImageFile(fullPath)) {
        processImageFile(fullPath, results);
      }
    }
  }

  async function processImageFile(filePath, results) {
    const category = getImageCategory(filePath);
    const relativePath = path.relative(sourceDir, filePath);
    const outputFileName = generateWebFilename(filePath, category);
    const outputPath = path.join(OUTPUT_DIR, category, outputFileName);

    const result = await optimizeImage(filePath, outputPath, category);

    if (result) {
      results.processed++;
      results.totalOriginalSize += result.originalSize;
      results.totalOptimizedSize += result.optimizedSize;
      results.files.push({
        category,
        original: relativePath,
        optimized: path.relative(OUTPUT_DIR, outputPath),
        ...result
      });
    } else {
      results.failed++;
    }
  }

  function isImageFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'].includes(ext);
  }

  await processDirectoryRecursive(sourceDir);
  return results;
}

// Generate optimization report
function generateReport(results) {
  const totalCompressionRatio = results.totalOriginalSize > 0
    ? ((results.totalOriginalSize - results.totalOptimizedSize) / results.totalOriginalSize * 100).toFixed(1)
    : 0;

  const report = `# Image Optimization Report

## Summary
- **Total Images Processed**: ${results.processed}
- **Failed**: ${results.failed}
- **Original Total Size**: ${(results.totalOriginalSize / 1024 / 1024).toFixed(2)} MB
- **Optimized Total Size**: ${(results.totalOptimizedSize / 1024 / 1024).toFixed(2)} MB
- **Total Space Saved**: ${((results.totalOriginalSize - results.totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB (${totalCompressionRatio}%)

## Optimization Settings Used

### Team Photos
- Dimensions: 400x400px (square crop)
- Format: WebP
- Quality: 85%

### News Images
- Dimensions: 1200x630px (social media optimized)
- Format: WebP
- Quality: 80%

### Sponsor Logos
- Max Width: 300px
- Format: PNG (preserves transparency)
- Quality: 90%

### General Images
- Max Width: 1200px
- Format: WebP
- Quality: 80%

## Files Processed

${results.files.map(file =>
  `- **${file.category}**: ${file.original} → ${file.optimized} (${file.compressionRatio}% smaller)`
).join('\n')}

---
Generated on: ${new Date().toISOString()}
`;

  return report;
}

// Main execution
async function main() {
  console.log('🖼️  Starting image optimization for migration...\n');

  // Check if sharp is installed
  try {
    require('sharp');
  } catch (error) {
    console.log('❌ Sharp is not installed. Installing...');
    console.log('Please run: npm install sharp');
    process.exit(1);
  }

  ensureDirectories();

  const results = await processDirectory(SOURCE_DIR);

  if (!results) {
    return;
  }

  console.log('\n📊 Optimization Complete!');
  console.log(`Processed: ${results.processed} images`);
  console.log(`Failed: ${results.failed} images`);
  console.log(`Space saved: ${((results.totalOriginalSize - results.totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);

  // Generate and save report
  const report = generateReport(results);
  fs.writeFileSync('./image-optimization-report.md', report);
  console.log('\n📋 Report saved: image-optimization-report.md');

  console.log('\n✨ Next steps:');
  console.log('1. Review optimized images in ./public/images/');
  console.log('2. Update content files with new image paths');
  console.log('3. Test image loading on the website');
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  optimizeImage,
  processDirectory,
  generateReport
};