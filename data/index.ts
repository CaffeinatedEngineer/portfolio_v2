export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm a passionate developer focused on creating elegant solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName:
      "w-full h-full object-contain flex items-center justify-center",
    titleClassName: "justify-end text-shadow",
    img: "/profile.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm a B.Tech student in Electronics & Communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently trying to dive into the Web3 space",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zuma AI",
    des: "A SaaS application which summarizes long PDFs into cheatsheets.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/aizuma.vercel.app",
  },
  {
    id: 2,
    title: "Uptimer",
    des: "A web3 based application which notifies the owner in case the website is down.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "Coming Soon",
    des: "Details coming soon",
    img: "/csoon.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/",
  },
  {
    id: 4,
    title: "Coming Soon",
    des: "Details coming soon",
    img: "/csoon.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Shashank has been an invaluable asset to our team. His Management skills and problem-solving abilities have consistently impressed us. He is not only a talented developer but also a great team player. I highly recommend him.",
    name: "Dr. V. Muthumanikandan",
    title: "Faculty Coordinator-Hackclub",
  },

  {
    id: 2,
    quote:
      "Shashank is a talented developer with a strong work ethic. He has a knack for solving complex problems and is always eager to learn new technologies. I have no doubt that he will excel in his future endeavors.",
    name: "Amrit Kumar Mishra",
    title: "Full Stack Developer",
  },

  {
    id: 3,
    quote:
      "Shashank is a hardworking and dedicated individual. He consistently demonstrates his ability to work in a team and complete tasks on time. I highly recommend him for any future projects.",
    name: "Grecil Unadkat",
    title: "Full Stack Developer",
  },
  {
    id: 4,
    quote:
      "Shashank is a hardworking and dedicated individual. He consistently demonstrates his ability to work in a team and complete tasks on time. I highly recommend him for any future projects.",
    name: "Shuktika Shreyasi",
    title: "AI/ML Engineer",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Hackclub-Vice President",
    desc: "Led the Hack Club team, ensuring succesfull completion of tech & gaming events. Main organizer of HackNight'25",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - Intern",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Ongoing Research Internship",
    desc: "Cloud-Aware Hybrid ECC-AES Encryption",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Many Electronics Projects",
    desc: "Built a wide range of electronics projects using Arduino, Raspberry Pi, and other microcontrollers.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/CaffeinatedEngineer",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
