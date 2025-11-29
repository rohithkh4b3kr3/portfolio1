import React from "react";
import ExperienceProjects from "./exp.jsx";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSolidity,
  SiMongodb,
  SiFlask,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiKubernetes,
  SiJenkins,
  SiVercel,
  SiNetlify,
  SiEthers,
} from "react-icons/si";

export default function TechStack() {
  const webDev = [
    { name: "JavaScript (ES6+)", icon: <FaReact className="text-sky-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-800" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  ];

  const web3 = [
    { name: "Solidity", icon: <SiSolidity className="text-gray-700" /> },
    { name: "Hardhat", icon: <span className="font-bold text-yellow-500"></span> },
    { name: "Ethers.js", icon: <SiEthers className="text-purple-600" /> },
    { name: "Web3.js", icon: <span className="font-bold text-yellow-600"></span> },
    { name: "Smart Contracts", icon: <span className="font-bold text-indigo-600"></span> },
  ];

  const devops = [
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
    { name: "CI/CD (Jenkins)", icon: <SiJenkins className="text-red-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
  ];

  const TickerRow = ({ items, reverse }) => {
    const duplicated = [...items, ...items];

    return (
      <div className="relative overflow-hidden w-full border-y-4 border-black bg-white shadow-xl mb-6">
        <div
          className={`flex gap-10 py-6 whitespace-nowrap ${
            reverse ? "ticker-reverse" : "ticker"
          }`}
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-lg font-bold px-5 py-3 rounded-xl border-2 border-black bg-white/80 backdrop-blur-md shadow-xl hover:scale-110 transition-all duration-300"
            >
              <span className="text-3xl">{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="techstack" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-4 mb-14">
          #Tech Stack
        </h2>

        <h3 className="text-2xl font-bold mb-4 text-center uppercase">Web Dev</h3>
        <TickerRow items={webDev} />

        <h3 className="text-2xl font-bold mb-4 text-center uppercase">Web3 & Blockchain</h3>
        <TickerRow items={web3} reverse />

        <h3 className="text-2xl font-bold mb-4 text-center uppercase">DevOps</h3>
        <TickerRow items={devops} />
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker {
          animation: scroll 25s linear infinite;
          will-change: transform;
        }
        .ticker-reverse {
          animation: scroll-reverse 25s linear infinite;
          will-change: transform;
        }
      `}</style>

      <ExperienceProjects />
    </>
  );
}
