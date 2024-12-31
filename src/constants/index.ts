import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/NaN.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a dedicated full-stack developer and aspiring software engineer with extensive experience in designing and building robust web applications. My expertise includes front-end technologies such as React and Vue, as well as back-end frameworks like Spring Boot and Laravel, with strong proficiency in databases like MySQL and PostgreSQL. I am passionate about software engineering, focusing on creating scalable, efficient, and innovative solutions. My goal is to contribute as a software engineer by leveraging my skills to drive impactful technologies, foster innovation, and enhance user experiences.`;

export const S_HERO_CONTENT = `I am a passionate basketball player with extensive experience representing my university and striving for excellence in the sport. As a Division 'A' player and vice captain, I have developed strong leadership, teamwork, and strategic thinking skills. My achievements include receiving University Sports Colors, the prestigious Best Player Award (2023), and recognition from SLUSA (2022). My dedication to basketball has helped me excel under pressure, collaborate effectively, and lead teams to success. These experiences have shaped my discipline, resilience, and drive to achieve excellence both on and off the court.`;

export const ABOUT_TEXT1 = `I am a third-year Computer Science undergraduate at the University of Colombo School of Computing (UCSC) with a strong passion for leveraging cutting-edge technologies to solve real-world problems. With hands-on experience in full-stack development through diverse projects, I have developed expertise in tools and frameworks like React, Spring Boot, Laravel, and PostgreSQL. My enthusiasm for competitive programming and front-end development drives me to constantly refine my technical and problem-solving skills.`;

export const ABOUT_TEXT2 = `Beyond academics, I am an accomplished basketball player, which has honed my leadership, teamwork, and strategic thinking abilities. Whether working in a collaborative team or independently, I am a quick learner committed to delivering high-quality solutions.`;

export const S_ABOUT_TEXT = `I am a passionate basketball player with a strong track record in sports at the university, district, and provincial levels. Starting my journey in mid-2011, I have secured multiple provincial championships and won the Division C Under-19 championship. I served as the Sports Vice Captain and Vice Captain of my college basketball team, demonstrating early leadership qualities. Currently, I play for my district and provincial teams. As the Vice Captain of the University of Colombo basketball team, I continue to showcase leadership, teamwork, and strategic thinking. My achievements include receiving the Best Player Award in 2023, earning University Sports Colors in 2022 and 2023, and receiving SLUSA Sports Colors at the university level in 2022. These experiences have sharpened my ability to perform under pressure, collaborate with diverse teams, and excel in both competitive and supportive roles.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "WeBuild",
    image: project1,
    description:
      "Developed a comprehensive construction management system with task and store management, efficient house model selection, payment services, and scheduling. Implemented authentication and authorization, advanced search filters, automated worker allocation, and robust backend management. Enhanced user experience with intuitive interfaces and privacy through access controls, improving overall construction management efficiency.",
    technologies: ["HTML", "CSS", "PHP", "JS", "MySql"],
  },
  {
    title: "Study Hive",
    image: project2,
    description:
      "Developed StudyHive, a collaborative learning platform with advanced search filters and matchmaking algorithms. Enabled users to organize study groups, participate in video calls, and engage in online chat. Integrated a leaderboard to foster competition and track student progress, enhancing the overall learning experience.",
    technologies: ["React", "Tailwind CSS", "SpringBoot", "Firebase", "PostgreSQL"],
  },
  {
    title: "Our LIbrary",
    image: project3,
    description:
      "Developed a web-based library management system integrating staff and members with role-based authentication and authorization. Supported CRUD operations for various user roles with real-time updates and secure access. Key features include role-specific dashboards, book reservation, reviews, notifications, advanced filters, and posting new book details, ensuring seamless and efficient library operations.",
    technologies: ["Vue", "Laravel"],
  },
  {
    title: "BioMark",
    image: project4,
    description:
      "Developed the BioMark app for a module assignment, designed for bio-data collection to support research work. Allows users to add bio-data without registering as volunteers, while registered users can add both bio-data and personal information to their accounts. The app includes authentication to ensure secure access, providing a seamless and reliable platform for data collection and management.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "Fitness Timer App",
    image: project5,
    description:
      "Developed a simple timer app designed for fitness tests. The app includes customizable countdown timers with features like a loud beep during the final seconds of each countdown. It supports multiple timer cycles, pause and reset options, providing an intuitive and efficient tool for managing fitness test intervals.",
    technologies: ["Flutter"],
  },
];

export const CONTACT = {
  address: "No: 44, Seenigoda, Wathugedara, Ambalangoda, Galle, Sri Lanka",
  phoneNo: "+94 76 911 7180 / +94 71 412 0111",
  email: "pramukhapoo@gmail.com",
};

export const LEARNING_EXPERIENCES = [
  {
    year: "2023",
    title: "Personal Portfolio Website",
    type: "Project",
    description: "Developed a responsive personal portfolio website using React and Tailwind CSS to showcase my skills and projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    year: "2023",
    title: "Web Development Bootcamp",
    type: "Course",
    description: "Completed an intensive web development bootcamp, covering front-end and back-end technologies, as well as modern development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    year: "2022",
    title: "JavaScript Algorithms and Data Structures",
    type: "Certification",
    description: "Earned a certification in JavaScript Algorithms and Data Structures, enhancing problem-solving skills and coding efficiency.",
    technologies: ["JavaScript", "Data Structures", "Algorithms"],
  },
  // Add more learning experiences as needed
  
];

// export const SPORTS_JOURNEY = [
//   {
//     year: "2018",
//     title: "National Championship",
//     achievement: "Gold Medal in 100m Sprint",
//     description: "Set a new personal record and secured first place in the national championship.",
//     location: "National Stadium, Mumbai"
//   },
//   {
//     year: "2019",
//     title: "State Team Selection",
//     achievement: "Selected as Team Captain",
//     description: "Led the state team in multiple tournaments and achieved collective success.",
//     location: "State Sports Academy"
//   },
//   {
//     year: "2020",
//     title: "International Debut",
//     achievement: "Silver Medal in Asian Championship",
//     description: "Represented the country at international level and secured podium finish.",
//     location: "Bangkok, Thailand"
//   },
//   {
//     year: "2021",
//     title: "Professional League",
//     achievement: "Most Valuable Player",
//     description: "Named MVP in the professional league season with outstanding performance.",
//     location: "National Circuit"
//   },
//   {
//     year: "2022",
//     title: "Commonwealth Games",
//     achievement: "Bronze Medal",
//     description: "Secured bronze medal in individual event at Commonwealth Games.",
//     location: "Birmingham, UK"
//   }
// ] as const;

export const SPORTS_JOURNEY = [
  {
    year: "2015",
    location: "Hometown",
    title: "Started Basketball",
    achievement: "Participated in local tournaments",
    description: "Began playing basketball at the community center and quickly developed a passion for the sport."
  },
  {
    year: "2018",
    location: "Regional Level",
    title: "Regional Championship",
    achievement: "Runner-up",
    description: "Led the team to the finals in the regional basketball championship."
  },
  // Add your two new milestones here
  {
    year: "2020",
    location: "University Level",
    title: "Joined University Team",
    achievement: "Top Scorer",
    description: "Represented the university in multiple tournaments and emerged as the leading scorer."
  },
  {
    year: "2023",
    location: "National Division 'A'",
    title: "Division 'A' League",
    achievement: "Team Captain",
    description: "Guided the team to the semi-finals in the national league while honing leadership and strategy skills."
  }
];

export const AWARDS = [
  
  {
    year: "2022, 2023",
    title: "University of Colombo Sports Colors",
    tournament: "Inter-University Championship",
    description:
      "Awarded for outstanding contributions to the University of Colombo basketball team.",
  },
];

export const SPECIAL_AWARDS = [
  {
    year: "2023",
    title: "Best Player Award",
    tournament: "Inter-University Championship",
    description:
      "Awarded for exceptional performance in basketball at the University of Colombo.",
  },
  {
    year: "2022",
    title: "SLUSA Sports Colors",
    tournament: "Inter-University Championship",
    description:
      "Recognized for outstanding basketball performance during the Inter-University Championship Tournaments.",
  },
];

export const LEADERSHIP_EXPERIENCES = [
  { year: "2023", title: "Vice Captain", organization: "University of Colombo Basketball Team", description: "Led the University of Colombo basketball team to multiple victories, fostering team collaboration and strategic play." },
  { year: "2019", title: "Sports Vice Captain", organization: "G/P. De S. Kularathna College", description: "Guided college athletic event players to excel in district and provincial level tournaments, fostering skill development and competitive success." },
  { year: "2012 - 2019", title: "Vice Captain", organization: "G/P. De S. Kularathna College Basketball Team", description: "Led the College basketball team to multiple victories, fostering team collaboration and strategic play." },
]


