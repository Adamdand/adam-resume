import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    atco,
    university,
    benevity,
    bre,
    sandp,
    carrent,
    jobit,
    tripguide,
    // threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  
  const services = [
    {
    title: "Full Stack Web Developer",
    icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Machine Learning",
        icon: backend,
    },
    {
        title: "Data Analysis",
        icon: creator,
    },
  ];

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "ATCO",
      icon: atco,
      iconBg: "#383E56",
      date: "July 2021 - May 2024",
      points: [
        "Building ReactJS webpages using TypeScript, NPM and Yarn, NVM and GIT.",
        "Creating frontends based on UI designs and connecting them to Firebase backends and NoSQL Databases using NodeJS and Google Cloud Functions. Communicating with QA team and customer to give time estimates and fix issues.",
        "Utilizing Jira Board and Azure DevOps to organize work with other team members in an Agile environment.",
        "Took on special tasks such as creating and connecting Facebook and Google Analytics (GA4) and increasing SEO ratings by 30%.",
      ],
    },
    {
      title: "Data and Machine Learning Engineer",
      company_name: "S&P Global",
      icon: sandp,
      iconBg: "#E6DEDD",
      date: "April 2021 - June 2021",
      points: [
        "Creating and fine-tuning Inflow Performance Relationship (IPR) curve tools to predict fluid behaviour in reservoir.",
        "Analytic versus Numerical modeling using Harmony IPR software.",
        "Thorough testing of the new software logic, making sure it aligns with manual calculations and theory.",
        "Identifying possible GUI improvements that might stumble users.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Benevity",
      icon: benevity,
      iconBg: "#383E56",
      date: "Jan 2021 - May 2021",
      points: [
        "Built a full stack application using CSS, HTML, JavaScript, React and Django.",
        "Worked in a team to create a webpage with similar functionalities as google maps, but with convenient clustering algorithms and visualizations.",
        "Results included clustering algorithms, search bars, button to change map design and a donation button.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
        title: "Masters of Software Engineering",
        company_name: "University of Calgary",
        icon: university,
        iconBg: "#E6DEDD",
        date: "June 2020 - June 2021",
        points: [
          "Movie theater ticket purchasing and refund machine/GUI – MVC Java project.",
          "Tic-Tac-Toe with smart AI NPC – OOP using nodes and client-servers.",
          "Large Tool-Shop Java Program and GUI - Built a distributed inventory management system and MVC framework from scratch, used SQL for data storage and retrieval.",
          "Machine learning ‘Titanic Competition’ – Kaggle competition using python",
          "Deep-Learning ‘Plant Disease Recognition’ – Kaggle competition using python.",
        ],
      },
    {
      title: "Data and Machine Learning Engineer",
      company_name: "Res-Solve SOlutions Inc. and BRE-Group",
      icon: bre,
      iconBg: "#E6DEDD",
      date: "June 2018 - June 2020",
      points: [
        "Worked in a fast-paced environment where everyone’s contributions were detrimental to the company’s success and the outcome of the machine learning tool.",
        "Compiled and organized large quantities of data into a uniform style, then interpreted methods to increase oil recovery rates for various Calgary oil companies including CNRL and Crescent Point.",
        "Supplied companies with detailed and critical information that aided in million-dollar field acquisitions.",
        "Extensive use of Tableau and Power-BI for business presentations.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I was fortunate to have Adam on my team during his very successful stint at ATCO (Digital). Adam is a dynamic and talented individual. No task was too difficult. Adam approached every thing with vigour, patience and an open mind. Adam’s positive mindset always helped put the team at ease. A talented developer, a fantastic communicator and a sunny disposition. This is Adam! I enjoyed working with Adam and I know you will too.",
      name: "Darryl Horton",
      designation: "Senior Delivery Manager",
      company: "ATCO ",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Working with Adam has been a breeze; he grasps development needs swiftly and executes them efficiently with his incredible skills. I've collaborated with him on multiple React projects and have been consistently amazed each time. Thank you, Adam, for simplifying our lives and for your adept problem-solving abilities. Your ability to craft pixel-perfect code aligning with proposed designs is truly remarkable. I sincerely look forward to collaborating with you again in the future!",
      name: "Lea Elkaim",
      designation: "UX/UI Designer",
      company: "ATCO",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I had the pleasure of recruiting and managing him for his position of project engineer-in-training. During his tenure at our company, he has shown strong potential for growth within the software field through his speed to obtain fluency with several software tools used in-house. Adam worked on a number of decision tree like projects and I think he could use those same skills in machine learning. Adam has proven himself in the field of data analytics through the development of several key dashboards used in a variety of reservoir engineering analyses.",
      name: "Richard Baker",
      designation: "President",
      company: "Res-Solve Solutions and BRE-Group",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };