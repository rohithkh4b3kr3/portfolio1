import React, { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight, FaLink } from "react-icons/fa";

export default function ExperienceProjects() {
  const experiences = [
    {
      title: "Senior Developer",
      subtitle: "WebOps Team · IIT Madras · May ’25 – Present",
      bg: "from-pink-50 to-pink-100",
      points: [
        "Engineered and maintained production web systems serving 11,000+ users.",
        "Led 10+ coordinators and executed major platform releases under tight deadlines.",
        "Oversaw CI/CD pipelines and ensured zero-downtime deployments.",
      ],
    },
    {
      title: "DevOps Head",
      subtitle: "Saarang 2026 · IIT Madras · May ’25 – Present",
      bg: "from-white to-gray-100",
      points: [
        "Directed a 5-member DevOps team powering 10+ live event applications.",
        "Managed deployments during festival operations with 35,000+ real-time users.",
        "Built mobile-first full-stack React Native app for festival participation.",
      ],
    },
    {
      title: "Research Publication",
      subtitle: "TheoMat · NIT Trichy",
      bg: "from-amber-50 to-amber-100",
      points: [
        "Trained and fine-tuned YOLOv5 for microstructure island-phase characterization.",
        "Designed high-resolution inference backend enabling scalable processing.",
        "Published research on performance optimization and detection accuracy.",
      ],
    },
  ];

  const projects = [
    {
      title: "Crowd Funding DApp",
      subtitle: "React · Solidity · Hardhat · WebRTC · MongoDB · MetaMask",
      bg: "from-purple-50 to-purple-200",
      points: [
        "Built decentralized fundraising platform enabling transparent campaigns.",
        "Integrated MetaMask for Web3 authentication and secure ETH transactions.",
        "On-chain records and real-time contribution tracking UI.",
      ],
      link: { href: "https://tranquil-wisp-3d9f5b.netlify.app/", label: "Live Demo" },
    },

    {
      title: "Detector — YOLOv5 Microstructure App",
      bg: "from-gray-50 to-gray-200",
      points: [
        "Optimized Flask inference backend for industrial feature detection.",
        "Visualization overlay for segmentation & material-science evaluation.",
        "Hosted on HuggingFace Spaces for public model demos.",
      ],
      link: {
        href: "https://huggingface.co/spaces/rohith0809/test-model",
        label: "View on HuggingFace",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      },
    },

    {
      title: "Event Booking Platform",
      bg: "from-pink-50 to-pink-200",
      points: [
        "Role-based event booking & admin dashboard using EJS + MongoDB.",
        "Secure auth powered by JWT & bcrypt.",
        "Built UI and backend with production-ready structure.",
      ],
      link: {
        href: "https://github.com/rohithkh4b3kr3/task2",
        label: "Github",
        icon: <FaGithub className="text-xl" />,
      },
    },

    {
      title: "Blockchain Voting App",
      bg: "from-green-50 to-emerald-200",
      points: [
        "Decentralized election platform enabling transparent candidate voting.",
        "MetaMask + Ethers.js wallet integration.",
        "React frontend connected to Solidity smart contracts.",
      ],
      link: {
        href: "https://github.com/rohithkh4b3kr3/BlockChain-Voting_app",
        label: "Github",
        icon: <FaGithub className="text-xl" />,
      },
    },

    {
      title: "ApexYield Staking DApp",
      bg: "from-indigo-50 to-indigo-200",
      points: [
        "Decentralized token staking with automated yield reward distribution.",
        "APR-based earnings logic with secure contract patterns",
        "Hardhat testing with React + MetaMask integration.",
      ],
      link: {
        href: "https://github.com/rohithkh4b3kr3/ApexYield_Staking_Dapp",
        label: "Github",
        icon: <FaGithub className="text-xl" />,
      },
    },

    

    {
      title: "Disaster Management & Training Analytics",
      bg: "from-sky-50 to-sky-200",
      points: [
        "AI-powered training shortfall insights using ML forecasting.",
        "Leaflet + PostGIS geo-visualization and emergency analytics dashboard.",
        "JWT-secured FastAPI backend with Chart.js visualization.",
      ],
      link: {
        href: "https://disaster-management-beryl.vercel.app/",
        label: "Live Demo",
        icon: <FaLink className="text-xl" />,
      },
    },
    {
  title: "MERN CI/CD Automation",
  bg: "from-orange-50 to-orange-200",
  points: [
    "Developed a full MERN stack application integrated with automated CI/CD pipelines.",
    "Configured GitHub Actions for automated testing, build, and deployment workflow.",
    "Implemented Docker containerization and enabled on-push deployment to cloud environment.",
    "Automated versioning, rollback strategy, and deployment approvals.",
  ],
  link: {
    href: "https://github.com/rohithkh4b3kr3/devops1",
    label: "View on Github",
    icon: <FaGithub className='text-xl' />,
  },
},

{
  title: "DevOps Deployment Automation",
  bg: "from-red-50 to-red-200",
  points: [
    "Engineered production-grade deployment workflow using Docker, GitHub Actions, and Nginx reverse proxy.",
    "Automated multi-environment deployment process with zero-downtime rollout.",
    "Integrated monitoring and logging with Prometheus + Grafana dashboard visualization.",
    "Improved deployment reliability and pipeline efficiency with optimized resource management.",
  ],
  link: {
    href: "https://github.com/rohithkh4b3kr3/Parking-Slot-Booking",
    label: "Github",
    icon: <FaGithub className='text-xl' />,
  },
},

  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginated = projects.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 font-serif relative overflow-hidden">
      {/* Experience */}
      <h2 className="text-5xl font-black text-center uppercase border-b-4 border-black pb-4 mb-14">
        # Work Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {experiences.map((exp, i) => (
          <article key={i} className={`bg-gradient-to-br ${exp.bg} border-2 border-black p-8 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}>
            <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
              {exp.title}
              <span className="block text-sm opacity-70 font-normal italic mt-1">
                {exp.subtitle}
              </span>
            </h3>
            <ul className="space-y-1 text-lg leading-relaxed">
              {exp.points.map((p, idx) => (
                <li key={idx}>• {p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Projects */}
      <h2 className="text-5xl font-black text-center uppercase border-b-4 border-black pb-4 mb-12">
        # Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 transition-all duration-500">
        {paginated.map((proj, i) => (
          <article key={i} className={`bg-gradient-to-br ${proj.bg} p-8 border-2 border-black rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
            <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-3">
              {proj.title}
            </h3>
            <ul className="space-y-1 text-lg">
              {proj.points.map((p, idx) => (
                <li key={idx}>• {p}</li>
              ))}
            </ul>
            {proj.link && (
              <a
                href={proj.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center font-bold mt-5 text-blue-700 hover:text-black"
              >
                {proj.link.logo && <img src={proj.link.logo} className="w-6 h-6" />}
                {proj.link.icon && proj.link.icon}
                {proj.link.label}
              </a>
            )}
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="border-2 border-black p-3 rounded-full hover:bg-black hover:text-white transition disabled:opacity-40"
        >
          <FaChevronLeft />
        </button>
        <p className="text-lg font-bold">
          {currentPage + 1} / {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="border-2 border-black p-3 rounded-full hover:bg-black hover:text-white transition disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
