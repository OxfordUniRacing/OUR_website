#!/usr/bin/env node

/**
 * Team Member Migration Script for Oxford University Racing
 *
 * Converts team member data from Squarespace export to markdown files
 * for the new Next.js content management system.
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'content', 'team');
const SUBTEAMS = ['leadership', 'aerodynamics', 'chassis', 'powertrain', 'electronics', 'operations'];

// Sample team member data (replace with actual Squarespace export data)
const TEAM_MEMBERS = [
  {
    name: "Sarah Johnson",
    role: "Team Principal",
    subteam: "leadership",
    image: "sarah-johnson.jpg",
    email: "sarah.johnson@oxforduniracing.com",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    year: 4,
    course: "Engineering Science",
    college: "Magdalen College",
    joinedYear: 2021,
    bio: "Sarah is in her fourth year studying Engineering Science at Magdalen College, Oxford. As Team Principal, she oversees all aspects of the Oxford University Racing program, from technical development to team management and external relations.\n\nSarah joined the team in her first year as a chassis team member and has progressed through various leadership roles. Her experience spans across multiple sub-teams, giving her a comprehensive understanding of Formula Student competition requirements.\n\nUnder her leadership, Oxford University Racing has achieved its best competitive results, including top 10 finishes at major Formula Student events. Sarah is passionate about developing the next generation of engineers and creating an inclusive, collaborative team environment.\n\nWhen not working on the race car, Sarah enjoys hiking, photography, and mentoring younger team members. She plans to pursue a career in automotive engineering after graduation."
  },
  {
    name: "James Mitchell",
    role: "Aerodynamics Lead",
    subteam: "aerodynamics",
    image: "james-mitchell.jpg",
    email: "james.mitchell@oxforduniracing.com",
    linkedin: "https://linkedin.com/in/jamesmitchell",
    year: 3,
    course: "Engineering Science",
    college: "St John's College",
    joinedYear: 2022,
    bio: "James is a third-year Engineering Science student at St John's College with a passion for aerodynamics and computational fluid dynamics. He leads the aerodynamics sub-team, where he coordinates wind tunnel testing, CFD simulations, and aerodynamic package development.\n\nSince joining the team, James has been instrumental in optimizing the car's aerodynamic performance, contributing to significant lap time improvements. He works closely with the chassis and powertrain teams to ensure integrated design solutions.\n\nHis technical expertise includes advanced CFD software, wind tunnel testing methodologies, and aerodynamic optimization techniques. James is particularly interested in sustainable racing technologies and their application to future Formula Student competitions.\n\nOutside of racing, James enjoys cycling, computer-aided design, and following Formula 1 racing. He plans to pursue a career in motorsport aerodynamics after graduation."
  },
  {
    name: "Emma Thompson",
    role: "Chassis Engineer",
    subteam: "chassis",
    image: "emma-thompson.jpg",
    email: "emma.thompson@oxforduniracing.com",
    linkedin: "https://linkedin.com/in/emmathompson",
    year: 2,
    course: "Materials Science",
    college: "Balliol College",
    joinedYear: 2023,
    bio: "Emma is a second-year Materials Science student at Balliol College specializing in composite materials and structural analysis. She joined the chassis team to apply her theoretical knowledge to practical engineering challenges.\n\nEmma focuses on chassis design optimization, working on weight reduction strategies while maintaining structural integrity. She has been involved in finite element analysis, material selection, and manufacturing process development for the current car.\n\nHer work includes collaborating with the aerodynamics team to ensure structural components integrate seamlessly with aerodynamic requirements. Emma is passionate about sustainable materials and their application in motorsport.\n\nWhen not in the workshop, Emma enjoys rock climbing, reading about materials science innovations, and participating in engineering design competitions. She aims to pursue a career in advanced materials engineering."
  },
  {
    name: "Michael Chen",
    role: "Powertrain Lead",
    subteam: "powertrain",
    image: "michael-chen.jpg",
    email: "michael.chen@oxforduniracing.com",
    linkedin: "https://linkedin.com/in/michaelchen",
    year: 4,
    course: "Mechanical Engineering",
    college: "Christ Church",
    joinedYear: 2021,
    bio: "Michael is in his fourth year studying Mechanical Engineering at Christ Church, Oxford. As Powertrain Lead, he oversees engine development, transmission design, and vehicle dynamics optimization.\n\nWith three years of experience in the powertrain sub-team, Michael has led the development of increasingly sophisticated engine management systems and hybrid power solutions. His expertise spans internal combustion engines, electric motor integration, and energy management systems.\n\nMichael's technical contributions have been crucial to the team's competitive success, particularly in endurance events where powertrain reliability is paramount. He mentors junior team members and coordinates with electronics engineers for integrated control systems.\n\nOutside of Formula Student, Michael enjoys karting, mechanical design projects, and staying current with automotive technology trends. He plans to work in electric vehicle development after graduation."
  },
  {
    name: "Sophie Williams",
    role: "Electronics Engineer",
    subteam: "electronics",
    image: "sophie-williams.jpg",
    email: "sophie.williams@oxforduniracing.com",
    linkedin: "https://linkedin.com/in/sophiewilliams",
    year: 3,
    course: "Electrical and Information Engineering",
    college: "Keble College",
    joinedYear: 2022,
    bio: "Sophie is a third-year Electrical and Information Engineering student at Keble College with a strong background in embedded systems and control theory. She specializes in vehicle electronics, telemetry systems, and data acquisition for the Formula Student car.\n\nSophie's work includes developing the car's electronic control units, sensor integration, and real-time data logging systems. She has implemented advanced telemetry solutions that provide crucial performance data during testing and competition.\n\nShe collaborates closely with all sub-teams to ensure electronic systems meet the requirements of mechanical, aerodynamic, and powertrain components. Sophie's expertise in PCB design, embedded programming, and wireless communication has been instrumental in the team's technical development.\n\nWhen not working on electronics, Sophie enjoys digital photography, coding personal projects, and participating in hackathons. She plans to pursue a career in automotive electronics and autonomous vehicle technology."
  },
  {
    name: "David Rodriguez",
    role: "Operations Manager",
    subteam: "operations",
    image: "david-rodriguez.jpg",
    email: "david.rodriguez@oxforduniracing.com",
    linkedin: "https://linkedin.com/in/davidrodriguez",
    year: 4,
    course: "Engineering, Economics and Management",
    college: "Oriel College",
    joinedYear: 2021,
    bio: "David is in his fourth year studying Engineering, Economics and Management at Oriel College. As Operations Manager, he oversees team logistics, budget management, sponsor relations, and event coordination.\n\nDavid brings a unique combination of technical knowledge and business acumen to the team. He manages the annual budget, coordinates sponsor partnerships, organizes competition logistics, and ensures smooth operations across all team activities.\n\nHis role involves balancing technical development with financial sustainability, ensuring the team can compete at the highest level while maintaining fiscal responsibility. David has successfully secured several key sponsorships and manages relationships with industry partners.\n\nOutside of team management, David enjoys strategic planning, financial modeling, and networking events. He plans to pursue a career in engineering management or motorsport business development after graduation."
  }
];

// Generate frontmatter for team member
function generateTeamMemberFrontmatter(member) {
  return `---
name: "${member.name}"
role: "${member.role}"
subteam: "${member.subteam}"
image: "/images/team/${member.image}"
email: "${member.email}"
linkedin: "${member.linkedin}"
year: ${member.year}
course: "${member.course}"
college: "${member.college}"
joinedYear: ${member.joinedYear}
---
`;
}

// Create team member markdown file
function createTeamMemberFile(member) {
  const subteamDir = path.join(CONTENT_DIR, member.subteam);

  // Ensure subteam directory exists
  if (!fs.existsSync(subteamDir)) {
    fs.mkdirSync(subteamDir, { recursive: true });
    console.log(`Created directory: ${subteamDir}`);
  }

  // Generate filename from name
  const filename = member.name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  const filePath = path.join(subteamDir, `${filename}.md`);
  const frontmatter = generateTeamMemberFrontmatter(member);
  const content = `${frontmatter}\n${member.bio}\n`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Created team member: ${member.name} → ${filePath}`);
}

// Main execution
function main() {
  console.log('👥 Starting team member migration...\n');

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
    console.log(`Created content directory: ${CONTENT_DIR}`);
  }

  let created = 0;
  let skipped = 0;

  TEAM_MEMBERS.forEach(member => {
    const subteamDir = path.join(CONTENT_DIR, member.subteam);
    const filename = member.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const filePath = path.join(subteamDir, `${filename}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`⚠️  Skipped existing: ${member.name}`);
      skipped++;
    } else {
      createTeamMemberFile(member);
      created++;
    }
  });

  console.log(`\n📊 Migration Complete!`);
  console.log(`Created: ${created} team members`);
  console.log(`Skipped: ${skipped} existing members`);
  console.log(`Total: ${TEAM_MEMBERS.length} team members`);

  console.log('\n📋 Next Steps:');
  console.log('1. Review generated team member files');
  console.log('2. Update image paths to match actual files');
  console.log('3. Add any missing team members');
  console.log('4. Verify all information is accurate');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  generateTeamMemberFrontmatter,
  createTeamMemberFile,
  TEAM_MEMBERS
};
