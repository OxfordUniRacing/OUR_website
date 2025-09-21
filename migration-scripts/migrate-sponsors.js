#!/usr/bin/env node

/**
 * Sponsor Migration Script for Oxford University Racing
 *
 * Converts sponsor information from Squarespace export to markdown files
 * for the new Next.js content management system.
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'sponsors');

// Sample sponsor data (replace with actual Squarespace export data)
const SPONSORS = [
  {
    name: "TechCorp",
    tier: "platinum",
    logo: "techcorp-logo.png",
    website: "https://techcorp.com",
    since: 2024,
    description: `TechCorp is a leading technology solutions provider specializing in engineering simulation and digital twin technology. Their cutting-edge software solutions help engineering teams worldwide optimize their designs and accelerate innovation.

As our Platinum Sponsor, TechCorp provides Oxford University Racing with access to professional-grade engineering software, high-performance computing resources, and technical mentorship from their expert team.

Their support enables us to conduct advanced aerodynamic simulations, structural analysis, and comprehensive vehicle dynamics modeling, significantly enhancing our competitive capabilities in Formula Student competitions.`
  },
  {
    name: "Engineering Solutions Ltd",
    tier: "gold",
    logo: "engineering-solutions-logo.png",
    website: "https://engineeringsolutions.co.uk",
    since: 2023,
    description: `Engineering Solutions Ltd is a specialist engineering consultancy providing design, analysis, and manufacturing services to the motorsport and automotive industries. With over 20 years of experience, they bring expertise in composite materials, structural analysis, and rapid prototyping.

As a Gold Sponsor, Engineering Solutions provides crucial support for our chassis and aerodynamics development. Their expertise in composite manufacturing techniques has been instrumental in achieving our lightweight yet strong chassis designs.

Their partnership includes technical consultation, material supply, and manufacturing support, enabling us to push the boundaries of Formula Student engineering.`
  },
  {
    name: "Apex Motorsports",
    tier: "silver",
    logo: "apex-motorsports-logo.png",
    website: "https://apexmotorsports.com",
    since: 2024,
    description: `Apex Motorsports is a performance automotive parts manufacturer specializing in suspension components, brakes, and drivetrain systems. Their high-quality, competition-proven products are used by professional racing teams worldwide.

As our Silver Sponsor, Apex Motorsports supplies critical components for our suspension and braking systems. Their technical support and product expertise help ensure our car performs optimally in all competition conditions.

Their contribution includes discounted components, technical guidance, and testing support, which has significantly improved our vehicle's handling and safety performance.`
  },
  {
    name: "Precision Machining Co",
    tier: "bronze",
    logo: "precision-machining-logo.png",
    website: "https://precisionmachining.co.uk",
    since: 2022,
    description: `Precision Machining Co specializes in high-precision CNC machining and manufacturing services for the engineering sector. Their expertise in producing complex, high-tolerance components makes them an ideal partner for Formula Student teams.

As a Bronze Sponsor, they provide machining services for our critical powertrain and chassis components. Their precision work ensures that our designs are manufactured to exact specifications, maintaining the integrity of our engineering calculations.

Their support includes discounted machining services, technical advice on manufacturability, and rapid turnaround times that help us meet our development deadlines.`
  },
  {
    name: "Advanced Composites UK",
    tier: "bronze",
    logo: "advanced-composites-logo.png",
    website: "https://advancedcomposites.co.uk",
    since: 2023,
    description: `Advanced Composites UK is a leading supplier of composite materials and manufacturing services. They specialize in carbon fiber, fiberglass, and other advanced materials used in high-performance applications.

Their Bronze Sponsorship supports our chassis and aerodynamic component manufacturing. They provide high-quality composite materials at competitive prices and offer technical guidance on material selection and processing techniques.

Their expertise has been crucial in helping us achieve the optimal balance between weight reduction and structural integrity in our car design.`
  },
  {
    name: "Oxford Engineering Supplies",
    tier: "bronze",
    logo: "oxford-engineering-logo.png",
    website: "https://oxfordengineeringsupplies.com",
    since: 2021,
    description: `Oxford Engineering Supplies is a local business providing engineering materials, tools, and consumables to educational institutions and research facilities. Their convenient location and educational discounts make them an invaluable partner.

As a Bronze Sponsor, they supply workshop consumables, hand tools, and materials for our prototyping and testing activities. Their support helps us maintain our workshop operations and enables rapid prototyping of design iterations.

Their partnership demonstrates the importance of local business support in educational engineering programs.`
  }
];

// Generate frontmatter for sponsor
function generateSponsorFrontmatter(sponsor) {
  return `---
name: "${sponsor.name}"
tier: "${sponsor.tier}"
logo: "/images/sponsors/${sponsor.logo}"
website: "${sponsor.website}"
since: ${sponsor.since}
---
`;
}

// Create sponsor markdown file
function createSponsorFile(sponsor) {
  const filePath = path.join(CONTENT_DIR, `${sponsor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '')}.md`);
  const frontmatter = generateSponsorFrontmatter(sponsor);
  const content = `${frontmatter}\n${sponsor.description}\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created sponsor: ${sponsor.name} → ${filePath}`);
}

// Main execution
function main() {
  console.log('🏢 Starting sponsor migration...\n');

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
    console.log(`Created content directory: ${CONTENT_DIR}`);
  }

  let created = 0;
  let skipped = 0;

  SPONSORS.forEach(sponsor => {
    const filename = sponsor.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const filePath = path.join(CONTENT_DIR, `${filename}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`⚠️  Skipped existing: ${sponsor.name}`);
      skipped++;
    } else {
      createSponsorFile(sponsor);
      created++;
    }
  });

  console.log(`\n📊 Migration Complete!`);
  console.log(`Created: ${created} sponsors`);
  console.log(`Skipped: ${skipped} existing sponsors`);
  console.log(`Total: ${SPONSORS.length} sponsors`);

  // Generate summary report
  const tierSummary = SPONSORS.reduce((acc, sponsor) => {
    acc[sponsor.tier] = (acc[sponsor.tier] || 0) + 1;
    return acc;
  }, {});

  console.log('\n📋 Sponsor Tier Summary:');
  Object.entries(tierSummary).forEach(([tier, count]) => {
    console.log(`  ${tier.charAt(0).toUpperCase() + tier.slice(1)}: ${count}`);
  });

  console.log('\n📋 Next Steps:');
  console.log('1. Review generated sponsor files');
  console.log('2. Update logo paths to match actual files');
  console.log('3. Add any missing sponsors from Squarespace');
  console.log('4. Verify all contact information and links');
  console.log('5. Test sponsor display on the website');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generateSponsorFrontmatter,
  createSponsorFile,
  SPONSORS
};
