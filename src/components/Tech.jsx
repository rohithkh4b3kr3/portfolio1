import React from "react";
import ExperienceProjects from "./exp.jsx";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiSolidity, SiMongodb, SiFlask, SiNextdotjs, SiDjango, SiPostgresql } from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "JavaScript (ES6+)", icon: <FaReact className="text-sky-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "C", icon: <span className="font-bold"></span> },
    { name: "SQL", icon: <span className="font-bold"></span> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Solidity", icon: <SiSolidity className="text-gray-700" /> },
    { name: "React.js", icon: <FaReact className="text-sky-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <span className="font-bold"></span> },
    { name: "Mongoose", icon: <SiMongodb className="text-green-700" /> },
    { name: "Web3.js", icon: <span className="font-bold"></span> },
    // { name: "Blockchain", icon: <span className="font-bold">⛓️</span> },
  ];
  const Row = [{ name: "Web3.js", icon: <span className="font-bold"></span> },
    // { name: "Blockchain", icon: <span className="font-bold">⛓️</span> },
    { name: "Django", icon: <SiDjango className="text-green-800" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-800" /> },
    { name: "REST APIs", icon: <span className="font-bold">🔗</span> },
    // { name: "Figma", icon: <span className="font-bold">🎨</span> },
    { name: "Postman", icon: <span className="font-bold">📮</span> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    // { name: "GitHub", icon: <FaGitAlt className="text-red-600" /> },
    // { name: "VS Code", icon: <span className="font-bold"></span> },
    { name: "Linux", icon: <span className="font-bold">🐧</span> },
    // { name: "Chrome DevTools", icon: <span className="font-bold"></span> },
    // { name: "regex", icon: <span className="font-bold">.*</span> },
    { name: "Tailwind CSS", icon: <span className="font-bold"></span> },
    
  
  ]

  return (
    <>
    {/* <Navbar /> */}
    <section
      id="techstack"
      className="max-w-6xl mx-auto px-6 py-16 font-serif bg-neutral-50 text-black relative overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-2 mb-12 tracking-tight">
        #Tech Classifieds
      </h2>

      {/* Moving ticker */}
      <div className="relative overflow-hidden border-y-4 border-black bg-white shadow-xl">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 py-6">
          {tech.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-lg font-bold border-2 border-black px-4 py-2 bg-neutral-100 shadow-md transform rotate-[-2deg] hover:rotate-0 transition duration-30"
            >
              <span className="text-2xl">{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Duplicate row for seamless loop */}
      {/* <div className="relative overflow-hidden border-y-4 border-black bg-white shadow-xl mt-4">
        <div className="animate-marquee2 whitespace-nowrap flex items-center gap-10 py-6">
          {tech.map((t, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center gap-3 text-lg font-bold border-2 border-black px-4 py-2 bg-neutral-100 shadow-md transform rotate-[2deg] hover:rotate-0 transition duration-300"
            >
              <span className="text-2xl">{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div> */}

      
      {/* 2nd duplicate  */}
      <div className="relative overflow-hidden border-y-4 border-black bg-white shadow-xl">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 py-6">
          {Row.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-lg font-bold border-2 border-black px-4 py-2 bg-neutral-100 shadow-md transform rotate-[-2deg] hover:rotate-0 transition duration-300"
            >
              <span className="text-2xl">{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
      

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee2 {
          display: inline-flex;
          animation: marquee2 35s linear infinite;
        }
      `}</style>
    </section>
    <ExperienceProjects/>
    </>
  );
}
