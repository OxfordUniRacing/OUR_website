#!/usr/bin/env node

/**
 * Content Audit Script for Oxford University Racing Migration
 *
 * This script helps audit the current Squarespace website content
 * and prepares a migration checklist.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const AUDIT_OUTPUT_FILE = 'content-audit-results.json';
const MIGRATION_CHECKLIST_FILE = 'migration-checklist.md';

// Content categories to audit
const CONTENT_CATEGORIES = {
  pages: [
    'Homepage',
    'About/About Us',
    'Team/Team Members',
    'News/Blog',
    'Sponsors/Partners',
    'Contact',
    'Competitions',
    'Gallery'
  ],
  teamMembers: [],
  newsArticles: [],
  sponsors: [],
  images: [],
  documents: []
};

// Generate content audit template
function generateAuditTemplate() {
  const auditTemplate = {
    timestamp: new Date().toISOString(),
    currentSite: 'https://oxforduniracing.com',
    pages: CONTENT_CATEGORIES.pages.map(page => ({
      name: page,
      url: '',
      status: 'pending', // pending, reviewed, migrated
      content: {
        text: '',
        images: [],
        links: [],
        forms: [],
        specialFeatures: []
      },
      notes: '',
      priority: 'medium' // high, medium, low
    })),
    teamMembers: {
      total: 0,
      leadership: [],
      aerodynamics: [],
      chassis: [],
      powertrain: [],
      electronics: [],
      operations: []
    },
    newsArticles: {
      total: 0,
      articles: []
    },
    sponsors: {
      total: 0,
      tiers: {
        title: [],
        platinum: [],
        gold: [],
        silver: [],
        bronze: []
      }
    },
    assets: {
      images: {
        total: 0,
        categories: {
          team: [],
          news: [],
          sponsors: [],
          cars: [],
          competitions: [],
          general: []
        }
      },
      documents: []
    },
    technical: {
      currentDomain: 'oxforduniracing.com',
      currentHost: 'Squarespace',
      specialFunctionality: [],
      integrations: [],
      analytics: '',
      socialMedia: []
    },
    migration: {
      estimatedEffort: '',
      complexityRating: '', // low, medium, high
      risks: [],
      dependencies: []
    }
  };

  return auditTemplate;
}

// Generate migration checklist
function generateMigrationChecklist() {
  const checklist = `# Oxford University Racing - Content Migration Checklist

## Pre-Migration Audit

### Website Structure
- [ ] Homepage content and layout documented
- [ ] All page URLs mapped and documented
- [ ] Navigation structure analyzed
- [ ] Footer content and links noted

### Content Inventory

#### Team Members
- [ ] Total count: ___
- [ ] Leadership team profiles
- [ ] Aerodynamics team profiles
- [ ] Chassis team profiles
- [ ] Powertrain team profiles
- [ ] Electronics team profiles
- [ ] Operations team profiles
- [ ] All profile photos downloaded (high resolution)
- [ ] Contact information verified

#### News & Blog Content
- [ ] Total articles count: ___
- [ ] Article titles and dates documented
- [ ] Featured images downloaded
- [ ] Author information noted
- [ ] Tags/categories identified
- [ ] Media files in articles saved

#### Sponsors & Partners
- [ ] Current sponsor count: ___
- [ ] Sponsor logos downloaded (vector format preferred)
- [ ] Sponsorship tiers documented
- [ ] Partnership descriptions saved
- [ ] Website links verified

#### Media Assets
- [ ] All images cataloged by type
- [ ] Image optimization requirements noted
- [ ] PDF documents and files downloaded
- [ ] Video content identified (if any)
- [ ] Gallery images organized

### Technical Assessment
- [ ] Current domain configuration documented
- [ ] DNS settings recorded
- [ ] Email setup (if any) documented
- [ ] Contact forms functionality noted
- [ ] Third-party integrations identified
- [ ] Analytics setup documented
- [ ] Social media links verified

## Migration Execution

### Content Creation
- [ ] Team member markdown files created
- [ ] News articles converted to markdown
- [ ] Sponsor profiles created
- [ ] Static pages content migrated
- [ ] Images optimized and organized
- [ ] Documents uploaded to appropriate locations

### Technical Setup
- [ ] Vercel project configured
- [ ] Domain settings prepared
- [ ] SSL certificate ready
- [ ] Redirects configured
- [ ] Analytics setup transferred
- [ ] Error monitoring enabled

### Testing & Validation
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Images display correctly
- [ ] Contact forms functional
- [ ] Mobile responsiveness verified
- [ ] Performance testing completed
- [ ] SEO elements verified
- [ ] Analytics tracking confirmed

### Go-Live Preparation
- [ ] Final content review completed
- [ ] Team training on CMS completed
- [ ] Backup procedures documented
- [ ] Rollback plan prepared
- [ ] Communication plan ready
- [ ] DNS change instructions prepared

## Post-Migration
- [ ] Site monitoring active
- [ ] User feedback collected
- [ ] Performance metrics reviewed
- [ ] SEO impact assessed
- [ ] Team adoption verified
- [ ] Issue resolution documented

---

**Migration Timeline**: ___
**Responsible Team Members**: ___
**Go-Live Target Date**: ___
`;

  return checklist;
}

// URL mapping template
function generateURLMappingTemplate() {
  const urlMapping = {
    instructions: "Map all current Squarespace URLs to new Next.js URLs",
    mappings: [
      {
        oldUrl: "https://oxforduniracing.com/",
        newUrl: "https://oxforduniracing.com/",
        status: "direct_match",
        redirectType: "none"
      },
      {
        oldUrl: "https://oxforduniracing.com/team",
        newUrl: "https://oxforduniracing.com/team",
        status: "direct_match",
        redirectType: "none"
      },
      {
        oldUrl: "https://oxforduniracing.com/team-members",
        newUrl: "https://oxforduniracing.com/team",
        status: "redirect_needed",
        redirectType: "301"
      },
      {
        oldUrl: "https://oxforduniracing.com/blog",
        newUrl: "https://oxforduniracing.com/news",
        status: "redirect_needed",
        redirectType: "301"
      },
      {
        oldUrl: "https://oxforduniracing.com/sponsors",
        newUrl: "https://oxforduniracing.com/sponsors",
        status: "direct_match",
        redirectType: "none"
      }
    ],
    notes: [
      "Add all discovered URLs during audit",
      "Ensure no broken links after migration",
      "Test all redirects before go-live",
      "Monitor 404 errors post-migration"
    ]
  };

  return urlMapping;
}

// Main execution
function runAudit() {
  console.log('🔍 Starting content audit for Oxford University Racing migration...\n');

  // Generate audit template
  const auditData = generateAuditTemplate();
  fs.writeFileSync(
    path.join(__dirname, '..', AUDIT_OUTPUT_FILE),
    JSON.stringify(auditData, null, 2)
  );
  console.log(`✅ Content audit template created: ${AUDIT_OUTPUT_FILE}`);

  // Generate migration checklist
  const checklist = generateMigrationChecklist();
  fs.writeFileSync(
    path.join(__dirname, '..', MIGRATION_CHECKLIST_FILE),
    checklist
  );
  console.log(`✅ Migration checklist created: ${MIGRATION_CHECKLIST_FILE}`);

  // Generate URL mapping template
  const urlMapping = generateURLMappingTemplate();
  fs.writeFileSync(
    path.join(__dirname, '..', 'url-mapping.json'),
    JSON.stringify(urlMapping, null, 2)
  );
  console.log(`✅ URL mapping template created: url-mapping.json`);

  console.log('\n📋 Next Steps:');
  console.log('1. Visit https://oxforduniracing.com and fill out the audit template');
  console.log('2. Download all content, images, and documents');
  console.log('3. Complete the migration checklist as you progress');
  console.log('4. Update URL mappings with actual discovered URLs');
  console.log('\n🚀 Happy migrating!');
}

// Run the script
if (require.main === module) {
  runAudit();
}

module.exports = {
  generateAuditTemplate,
  generateMigrationChecklist,
  generateURLMappingTemplate
};