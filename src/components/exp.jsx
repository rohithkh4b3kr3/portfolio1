import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ExperienceProjects() {
  return (
    <section
      id="experience-projects"
      className="max-w-6xl mx-auto px-6 py-16 font-serif bg-neutral-50 text-black relative overflow-hidden"
    >
      {/* Big Headline */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-4 mb-12 tracking-tight">
       # Work Experience & Projects 
      </h2>

      {/* Grid layout like news columns */}
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {/* ===== EXPERIENCE ===== */}
    <article className="border-2 border-black bg-pink-100 p-6 shadow-md hover:scale-[1.01] transform transition duration-500 rotate-[-1deg]">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Senior Developer  
            <span className="block text-sm normal-case font-normal italic">
              Institute’s WebOps Team | May ’25 – Present | IITM
            </span>
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Designs and maintains websites for the student community of 11,000+.</li>
            <li>Leading 10+ coordinators to build platforms enhancing campus experience.</li>
            <li>Managing 3+ projects with testing, deployment, and workflow improvements.</li>
          </ul>
        </article>

        <article className="border-2 border-black bg-white p-6 shadow-md hover:scale-[1.01] transform transition duration-500 rotate-[1deg]">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
             DevOps  Head
            <span className="block text-sm normal-case font-normal italic">
              Saarang 2026 | May ’25 – Present | IITM
            </span>
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Leading a 5+ member developer team delivering 10+ web portals for Saarang.</li>
            <li>Managing DevOps ensuring smooth operation of 10+ websites during the fest.</li>
            <li>Building a React Native app for 35K+ users with full backend integration.</li>
          </ul>
        </article>

        <article className="border-2 border-black bg-amber-100 p-6 shadow-md hover:scale-[1.01] transform transition duration-500 rotate-[-2deg] md:col-span-2">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Research Publication
          </h3>
          <p className="text-lg leading-relaxed">
            Collaborated with TheoMat team, NITT, to train and fine-tune a YOLOv5 model for
            phase detection. Published research on model optimization and detection accuracy.
          </p>
        </article>
        

        {/* ===== PROJECTS ===== */}
    
        <article className="border-2 border-black bg-neutral-100 p-10 shadow-lg hover:scale-[1.02] transform transition duration-500 rotate-[1deg]">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Detector — YOLOv5 App
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Built a Flask + YOLOv5 web app for M/A island detection.</li>
            <li>Integrated custom model via REST API for automated image analysis.</li>
            <li>Developed vue/React frontend for uploads & visualization.</li>
            <li>Streamlined image-to-output workflow for faster detection.</li>
            <a href="https://huggingface.co/spaces/rohith0809/test-model"> <img
            src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
            alt="Hugging Face"
           className="w-6 h-6 mr-2"/> <span>Huggingface</span>
    </a>
          </ul>
        </article>

        <article className="border-2 border-black bg-pink-100 p-6 shadow-lg hover:scale-[1.02] transform transition duration-500 rotate-[-1deg]">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Event Booking Platform
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Developed full-stack event booking system with authentication.</li>
            <li>Secured event management using JWT, bcrypt, MongoDB.</li>
            <li>Responsive frontend with EJS-powered admin dashboard.</li>
            <li>Enabled complete CRUD operations for event workflows.</li>
            <a href="https://github.com/rohithkh4b3kr3/task2"><FaGithub className="mr-2 text-2xl" /></a>

          </ul>
        </article>

        <article className="border-2 border-black bg-green-50 p-6 shadow-lg hover:scale-[1.02] transform transition duration-500 rotate-[2deg] md:col-span-2">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Blockchain Voting App
          </h3>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Developed decentralized voting app on Ethereum blockchain.</li>
            <li>Wrote & deployed smart contracts in Solidity for operations.</li>
            <li>Integrated MetaMask authentication & Ethers.js interactions.</li>
            <li>React frontend delivering user-friendly decentralized voting.</li>
            <a href="https://github.com/rohithkh4b3kr3/BlockChain-Voting_app"><FaGithub className="mr-2 text-2xl" /></a>
                {/* { name: "Git", icon: <FaGitAlt className="text-red-600" /> } */}
            
          </ul>
        </article>
      </div>

      {/* Floating paper scraps animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-xs font-bold text-gray-400 opacity-50 animate-float-rotate"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {["EXCLUSIVE", "BREAKING", "REPORT", "SNIPPET"][i % 4]}
          </span>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatRotate {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float-rotate {
          animation: floatRotate 14s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
