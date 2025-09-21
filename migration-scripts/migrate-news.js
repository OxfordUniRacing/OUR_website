#!/usr/bin/env node

/**
 * News Article Migration Script for Oxford University Racing
 *
 * Converts news articles and blog posts from Squarespace export to markdown files
 * for the new Next.js content management system.
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'news');

// Sample news articles (replace with actual Squarespace export data)
const NEWS_ARTICLES = [
  {
    title: "Formula Student Austria 2024 Results",
    date: "2024-08-15",
    author: "James Mitchell",
    featuredImage: "fs-austria-2024.jpg",
    excerpt: "Oxford University Racing achieved an impressive top 10 finish at Formula Student Austria 2024, showcasing our team's dedication and engineering excellence.",
    tags: ["Competition", "Formula Student", "Austria", "Results"],
    featured: true,
    content: `Oxford University Racing delivered an outstanding performance at Formula Student Austria 2024, securing a top 10 finish in the overall competition. The event, held at the Red Bull Ring in Spielberg, brought together over 100 teams from around the world to compete in various static and dynamic events.

## Competition Highlights

Our team excelled across multiple disciplines:

- **Technical Inspection**: Passed on the first attempt, demonstrating our meticulous preparation
- **Static Events**: Strong performances in Cost Report (8th place) and Business Presentation (12th place)
- **Dynamic Events**: Competitive times in Acceleration and Skid Pad events
- **Endurance**: Successfully completed the 22km endurance race

## Team Performance

The 2024 car, featuring significant aerodynamic improvements and a refined powertrain, proved its capabilities on the international stage. Our electronics package, developed entirely in-house, performed flawlessly throughout the competition weekend.

"This result is a testament to the hard work and dedication of every team member," said Team Principal Sarah Johnson. "We've made significant progress since last year, and this finish motivates us for the remaining competitions this season."

## Looking Ahead

The team will now focus on Formula Student UK, taking place at Silverstone Circuit in July. With valuable lessons learned from Austria, we're confident about delivering an even stronger performance on home soil.

Special thanks to our sponsors who made this competition possible, and to all the team members who traveled to Austria to support the car and drivers.`
  },
  {
    title: "New 2025 Car Development Underway",
    date: "2024-07-20",
    author: "Emma Thompson",
    featuredImage: "2025-car-development.jpg",
    excerpt: "The design phase for our 2025 Formula Student car is in full swing, with exciting innovations in aerodynamics, materials, and powertrain technology.",
    tags: ["Car Development", "2025 Season", "Engineering", "Innovation"],
    featured: true,
    content: `The Oxford University Racing team has begun development of our 2025 Formula Student car, with ambitious goals for improved performance and innovative engineering solutions. This year's design incorporates cutting-edge technologies and lessons learned from our successful 2024 campaign.

## Key Development Areas

### Aerodynamics
Our aerodynamics team is implementing advanced computational fluid dynamics (CFD) analysis to optimize the car's aerodynamic package. New wing designs and underbody concepts aim to reduce drag while maintaining downforce.

### Materials & Chassis
The chassis team is exploring lightweight composite materials and innovative manufacturing techniques. Finite element analysis is being used to optimize structural integrity while minimizing weight.

### Powertrain
The powertrain sub-team is developing an improved engine management system with enhanced fuel efficiency and power delivery. Integration with the electronics team ensures optimal performance.

## Timeline & Milestones

- **Q3 2024**: Design finalization and simulation phase
- **Q4 2024**: Manufacturing and initial testing
- **Q1 2025**: Integration and track testing
- **Q2 2025**: Competition preparation and final tuning

## Innovation Focus

This year's car will feature several innovative solutions:

1. **Sustainable Materials**: Incorporating bio-composite materials where possible
2. **Advanced Electronics**: New telemetry and data acquisition systems
3. **Energy Management**: Optimized power distribution and efficiency
4. **Manufacturing Techniques**: 3D printing applications for complex components

## Team Expansion

With increased complexity comes the need for more team members. We're actively recruiting students from all engineering disciplines to contribute to this exciting project.

The entire team is energized by the challenges ahead and committed to pushing the boundaries of Formula Student engineering.`
  },
  {
    title: "TechCorp Becomes Platinum Sponsor",
    date: "2024-06-10",
    author: "David Rodriguez",
    featuredImage: "techcorp-sponsorship.jpg",
    excerpt: "We're thrilled to announce TechCorp as our new Platinum Sponsor, bringing advanced engineering software and technical expertise to the team.",
    tags: ["Sponsorship", "TechCorp", "Partnership", "Engineering Software"],
    featured: false,
    content: `Oxford University Racing is excited to announce TechCorp as our newest Platinum Sponsor. This partnership brings industry-leading engineering software and technical expertise to our Formula Student program.

## Partnership Details

TechCorp's sponsorship includes:

- Access to professional-grade CAD and simulation software
- High-performance computing resources for complex calculations
- Technical mentorship from their engineering team
- Software training for team members
- Support for competition travel and equipment

## Impact on Team Development

"TechCorp's support will significantly enhance our engineering capabilities," said Team Principal Sarah Johnson. "Their software tools will allow us to conduct more detailed analysis and optimization of our car design."

The partnership enables the team to use industry-standard tools for:
- Aerodynamic simulation and analysis
- Structural finite element analysis
- Computational fluid dynamics
- Vehicle dynamics modeling

## Looking Forward

This sponsorship strengthens Oxford University Racing's position as a competitive Formula Student team and provides valuable industry connections for our members. We're grateful for TechCorp's investment in the next generation of engineers.

The partnership begins immediately and will support the team through the 2025 competition season and beyond.`
  },
  {
    title: "Summer Testing Program Success",
    date: "2024-05-25",
    author: "Michael Chen",
    featuredImage: "summer-testing.jpg",
    excerpt: "Our summer testing program has yielded excellent results, with significant improvements in lap times and vehicle reliability.",
    tags: ["Testing", "Performance", "Summer", "Development"],
    featured: false,
    content: `The Oxford University Racing summer testing program has concluded successfully, with the team achieving significant performance improvements and gathering valuable data for the upcoming competition season.

## Testing Highlights

### Track Performance
- **Lap Time Improvement**: 2.3 seconds faster than previous best
- **Consistency**: Reduced lap time variance by 15%
- **Reliability**: 100% completion rate across all test sessions

### Technical Achievements
- **Engine Performance**: Optimized fuel mapping for better power delivery
- **Suspension Tuning**: Improved handling characteristics
- **Brake System**: Enhanced thermal management and feel

## Data Collection & Analysis

The testing program generated over 50GB of telemetry data, including:
- Real-time vehicle dynamics data
- Engine performance metrics
- Tire temperature and pressure data
- Driver feedback and lap analysis

## Driver Development

All team drivers participated in the testing program, with particular focus on:
- Racecraft and consistency
- Data interpretation skills
- Setup optimization techniques
- Safety and procedural training

## Next Steps

The team will now analyze all collected data to finalize the competition setup. Key areas of focus include:
- Final suspension tuning
- Aerodynamic package optimization
- Reliability validation
- Competition strategy development

The successful testing program has positioned Oxford University Racing strongly for the upcoming Formula Student competitions.`
  },
  {
    title: "New Team Members Welcomed",
    date: "2024-04-15",
    author: "Sophie Williams",
    featuredImage: "new-members.jpg",
    excerpt: "We're excited to welcome 15 new team members to Oxford University Racing, bringing fresh perspectives and enthusiasm to all sub-teams.",
    tags: ["Team", "Recruitment", "New Members", "Growth"],
    featured: false,
    content: `Oxford University Racing is pleased to welcome 15 new team members for the 2024/2025 academic year. This influx of talent brings new energy and diverse skills to all our sub-teams.

## New Team Structure

### Leadership
- 2 new members joining the leadership team
- Focus on project management and coordination

### Technical Teams
- **Aerodynamics**: 3 new members with CFD experience
- **Chassis**: 4 new members specializing in composites
- **Powertrain**: 2 new members with engine expertise
- **Electronics**: 3 new members with embedded systems skills

### Operations
- 1 new member joining operations and logistics

## Orientation Program

All new members participated in a comprehensive orientation program covering:
- Formula Student rules and regulations
- Team structure and communication protocols
- Safety procedures and workshop practices
- Current project status and objectives

## Fresh Perspectives

"We're excited about the new ideas and approaches our new members bring," said Team Principal Sarah Johnson. "Their enthusiasm and fresh perspectives will help drive innovation across all areas of the project."

The expanded team now includes members from 8 different Oxford colleges, representing diverse academic backgrounds in engineering, materials science, and related fields.

## Looking Forward

The new team members will begin contributing immediately to various aspects of car development, from design and simulation to manufacturing and testing. Their involvement will be crucial as we prepare for the upcoming competition season.

Welcome to the team, and let's make this our most successful year yet!`
  }
];

// Generate frontmatter for news article
function generateNewsFrontmatter(article) {
  return `---
title: "${article.title.replace(/"/g, '\\"')}"
date: "${article.date}"
author: "${article.author}"
featuredImage: "/images/news/${article.featuredImage}"
excerpt: "${article.excerpt.replace(/"/g, '\\"')}"
tags: [${article.tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${article.featured}
---
`;
}

// Create news article markdown file
function createNewsArticleFile(article) {
  // Generate filename from title
  const filename = article.title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const filePath = path.join(CONTENT_DIR, `${filename}.md`);
  const frontmatter = generateNewsFrontmatter(article);
  const content = `${frontmatter}\n${article.content}\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created news article: ${article.title} → ${filePath}`);
}

// Main execution
function main() {
  console.log('📰 Starting news article migration...\n');

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
    console.log(`Created content directory: ${CONTENT_DIR}`);
  }

  let created = 0;
  let skipped = 0;

  NEWS_ARTICLES.forEach(article => {
    const filename = article.title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const filePath = path.join(CONTENT_DIR, `${filename}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`⚠️  Skipped existing: ${article.title}`);
      skipped++;
    } else {
      createNewsArticleFile(article);
      created++;
    }
  });

  console.log(`\n📊 Migration Complete!`);
  console.log(`Created: ${created} news articles`);
  console.log(`Skipped: ${skipped} existing articles`);
  console.log(`Total: ${NEWS_ARTICLES.length} articles`);

  console.log('\n📋 Next Steps:');
  console.log('1. Review generated news articles');
  console.log('2. Update image paths to match actual files');
  console.log('3. Add any missing articles from Squarespace');
  console.log('4. Verify all metadata is correct');
  console.log('5. Test article display on the website');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generateNewsFrontmatter,
  createNewsArticleFile,
  NEWS_ARTICLES
};
