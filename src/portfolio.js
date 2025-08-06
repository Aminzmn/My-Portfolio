import emoji from "react-easy-emoji";

const greeting = {
  username: "Amin Zamani",
  greetingText: "Hi all, I'm ",
  greetingName: "Amin",
  subTitle: emoji("Computer Programmer 👨‍💻"),
  resumeLink:
    "https://drive.google.com/file/d/1mTqakEQZGmI7loglWwUiU9OyQAa-9wRC/view?usp=drive_link",
  education: [
  {
    schoolName: "Algonquin College Ottawa",
    logo: "College.png",
    subHeader: "Computer Programming",
    duration: "January 2025 - Current",
    desc: "Focused on core programming principles and modern software development practices.",
    descBullets: [
    "Proficient in building responsive web applications.",
    "Developed strong skills in object-oriented programming (OOP) with Java.",
    "Collaborated on multiple group projects, gaining experience in teamwork.",
    "Applied database design principles using SQL, Oracle, and MongoDB to create data models.",
    ],
  }
  ],
};


const socialMediaLinks = {
  github: "https://github.com/Aminzmn",
  linkedin: "https://www.linkedin.com/in/amin-zamani-42966b229/",
  gmail: "Zama0039@algonquinlive.com",
};


const skillsSection = {
  title: "What I do",
  subTitle: (
    <>
      🚀 Curious coder who loves exploring new tech every day.
      <br />
      Currently focused on web development and backend programming.
    </>
  ),
  skills: [
    emoji("⚡ Experienced with Java, Python, PHP, SQL, HTML, CSS, and JavaScript"),
    emoji("⚡ Worked with databases including MySQL, PostgreSQL, MS SQL Server, and MongoDB"),
    emoji("⚡ Familiar with IDEs like IntelliJ, Eclipse, and VS Code"),
    emoji("⚡ Comfortable using Windows and Linux (Ubuntu) environments"),
    emoji("⚡ Strong communication and teamwork skills developed through school projects"),
    emoji("⚡ Good at managing time, adapting to challenges, and solving problems"),
  ],


  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      id: "html-5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      id: "css3",
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js",
      id: "js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      id: "reactjs",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      id: "sql",
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-leaf",
      id: "mongodb",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      id: "python",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      id: "java",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git",
      id: "git",
    },
  ],
};

const experienceSection = {
  title: "Work Experience",
  workExperiences: [
    {
      role: "Laptop Repair and Refurbishment",
      company: "Emash Co",
      companyUrl: "https://EmashCo.ca",
      companyLogo: "emashco.jpg",
      duration: "Oct 2024-Dec 2024",
      description: [
        "Diagnosed and repaired hardware and software issues in laptops.",
        "Replaced faulty components and upgraded laptop hardware.",
        "Conducted refurbishment processes for second-hand laptops and prepared them for resale.",
        "Provided technical advice to customers on maintenance and optimal use of laptops.",
        "Recorded and documented all repairs and services performed.",
      ],
    },
    {
      role: "Laptop Sales and Marketing Consultant",
      company: "Emash Co",
      companyUrl: "https://EmashCo.ca",
      companyLogo: "emashco.jpg",
      duration: "Oct 2024-Dec 2024",
      description: [
        "Introduced and explained the features and benefits of laptops to customers.",
        "Assisted customers in selecting the right laptop based on their needs and budget.",
        "Conducted the sales process and provided after-sales services to customers.",
        "Utilized social media platforms to attract new customers and promote store products.",
        "Responded to customer inquiries and feedback on social media and increasing engagement.",
      ],
    },
  ],
};


const certifications = {
  display: false,
  certifications: [
    {
      title: "",
      subtitle: "",
      logo_path: "",
      certificate_link:
        "",
      alt_name: "",
      color_code: "",
    },
  ],
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Aminzmn",
  showGithubProfile: "true",
  display: true,
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write about new technologies and things I'm learning.",
  blogs: [
    {
      url: "https://github.com/Aminzmn",
      title: "My First Blog Post",
      description:
        "This is a placeholder for my first blog post. I can link to my articles on platforms like Dev.to, Medium, or even a personal blog.",
    },
    {
      url: "https://github.com/Aminzmn",
      title: "My Second Blog Post",
      description:
        "This is another placeholder. I can add more blog objects to this array to showcase my writing.",
    },
  ],
  display: false,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all",
  email_address: "Zama0039@algonquinlive.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  experienceSection,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
