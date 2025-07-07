import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Dinesh Gupta Ayetha",
  initials: "ADG",
  url: "https://www.linkedin.com/in/dinesh-ayetha/",
  location: "Vijayawada, AP",
  locationLink: "https://maps.app.goo.gl/zMMHAYATssPDNnS49",
  description:
    "I am a Full Stack Developer with a passion for building web applications. I have experience in developing applications using React, Node.js, and MongoDB along with a strong background in IoT, automation, and data scraping",
  summary:
    "",
  avatarUrl: "/me2.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Mongo DB",
    "Postgres",
    "Tailwind CSS",
    "SQL",
    "Firebase",
    "AWS EC2",
    "Visio",
    "Playwright",
    "Express.js",
    "PlayWright",
    "Selenium",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dineshgupta2418@gmail.com",
    tel: "+91 7993442418",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/code-adg",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dinesh-ayetha/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_the_adg_",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1PGVQdXkhcCZ39y-yBALivjuw8ex5aqLB/view?usp=sharing",
        icon: FileText,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "dineshgupta2418@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Green Fusion IoT Solutions",
      href: "https://gfiotsolutions.netlify.app/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/gf.png",
      start: "Dec 2024",
      end: "Feb 2025",
      description:
        "Contributed to the development of an energy consumption dashboard for small to medium-scale industries, improving energy monitoring efficiency by 75% through digitalization and reducing energy overuse penalties by 85% with a real-time alerting system.",
    },
    {
      company: "Blumin LLP",
      badges: [],
      href: "https://www.bluminiic.com",
      location: "Remote",
      title: "Data Scraping Intern",
      logoUrl: "/blumin.jpeg",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Scraped inmate details from over 10 US county websites using Playwright JS, efficiently extracting data through optimized HTML selectors.",
    }
  ],
  education: [
    {
      school: "Vishnu Institute of Technology, Bhimavaram",
      href: "https://www.vishnu.edu.in/",
      degree: "Bachelor of Technology in Information Technology",
      logoUrl: "/vishnu.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Sri Sarada Junior College, Vijayawada",
      href: "https://www.saradaedu.com",
      degree: "Intermediate, MPC",
      logoUrl: "/sarada.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Guntur Oxford EM High School, Vijayawada",
      href: "https://oxfordiitschool.com/",
      degree: "Secondary School",
      logoUrl: "/oxford.jpeg",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "InvestWise",
      href: "https://investwise01.netlify.app/",
      dates: "Mar 2025",
      active: true,
      description:
        "Implemented a secure Investment Advisor with a chatbot for assistance and a financial document analyzer, while also developing a Twitter-like community platform to help investors and traders connect and access relevant information efficiently.",
      technologies: [
        "React.js",
        "Typescript",
        "Flask",
        "Gemini API",
        "TailwindCSS",
        "Beautiful Soup",
        "Tessaract",
      ],
      links: [
        {
          type: "Website",
          href: "https://investwise01.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/code-adg/InvestWise",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/investwise.png",
      video:
        "",
    },
    {
      title: "Smart Baby Incubator Monitoring System",
      href: "https://simsgf.netlify.app/",
      dates: "Feb 2025",
      active: true,
      description:
        "Developed a real-time monitoring dashboard using ESP32 and 7+ sensors, enhancing infant safety by 40% through a cloud-connected system and mobile app that ensures 99% uptime and instant alerts for parents and doctors.",
      technologies: [
        "React.js",
        "Typescript",
        "Firebase",
        "ESP32",
        "TailwindCSS",
        "Related Sensors"
      ],
      links: [
        {
          type: "Website",
          href: "https://simsgf.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GreenFusionIotSolutions/Smart-Incubator-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/image.png",
      video: "",
    },
    {
      title: "TreeEconomy",
      href: "https://shiv868.github.io/TreeEconomy_Firebase/",
      dates: "Feb 2024",
      active: true,
      description:
        "Developed and managed a platform supporting donor-funded tree planting to combat deforestation, with a gifting feature that promoted environmental awareness and user participation in conservation.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "PHP",
      ],
      links: [
        {
          type: "Website",
          href: "https://shiv868.github.io/TreeEconomy_Firebase/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/tree.png",
      video: "",
    },
    {
      title: "FieldMate",
      href: "https://fieldmate-da2ff.web.app/fieldmate0/index.html",
      dates: "Sep 2023",
      active: true,
      description:
        "Implemented real-time weather forecasting with location-specific updates and developed an ML-based crop disease detection system to help farmers plan better and receive timely treatment recommendations.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Machine Learning",
        "Weather API",
      ],
      links: [
        {
          type: "Website",
          href: "https://fieldmate-da2ff.web.app/fieldmate0/index.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/field.png",
      video:
        "",
    },
  ],
} as const;
