import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16 font-serif bg-neutral-50 text-black relative overflow-hidden"
    >
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-2 mb-12 tracking-tight">
        #About 
      </h2>

      {/* Floating tags */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className={`absolute text-[10px] font-bold text-gray-700 opacity-40 animate-float-rotate`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            {["#Dedication", "#Innovation", "#Learning", "#Perseverance", "#Discipline", "#Growth", "#Focus", "#Vision", "#Professionalism", "#Integrity", "#Excellence", "#Commitment"][i % 12]}
          </span>
        ))}
      </div>

      {/* Collage-style layout */}
      <div className="relative z-10 grid gap-8 md:grid-cols-3 ">
        {/* Education */}
      <article className="border-2 border-black  p-6 shadow-xl transform rotate-[-2deg] hover:rotate-0 hover:scale-105 bg-voilet-100  transition-all duration-500">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Education
          </h3>
          <p className="text-lg leading-relaxed">
            Pursuing a <span className="font-bold">B.Tech in Metallurgy & Materials Engineering</span> at <span className="font-bold">IIT Madras</span>, Batch of <span className="font-bold">2027</span>. Dedicated to continuous academic and personal growth.
          </p>
        </article>

        {/* What I Do */}
        <article className="border-2 border-black bg-green-100 p-6 shadow-xl transform rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Professional Focus
          </h3>
          <p className="text-lg leading-relaxed">
            Passionate about <span className="font-bold">Fullstack Development</span> and <span className="font-bold">Blockchain Technology</span>. Committed to building efficient systems and exploring innovative digital solutions.
          </p>
        </article>

        {/* Hobbies */}
        <article className="border-2 border-black bg-yellow-100 p-6 shadow-xl transform rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Interests
          </h3>
          <p className="text-lg leading-relaxed">
            Focused on advancing skills in <span className="font-bold">Full Stack Web Development</span>, <span className="font-bold">Blockchain Technology</span>, and <span className="font-bold">Cloud & DevOps</span>. Driven by a vision to build impactful, secure, and scalable digital solutions.
          </p>
        </article>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatRotate {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
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
