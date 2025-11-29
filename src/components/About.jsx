import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 font-serif bg-neutral-100 text-black relative overflow-hidden"
    >
      {/* Section Title */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-center uppercase border-b-4 border-black pb-4 mb-16 tracking-tight">
        # About Me
      </h2>

      {/* Floating Keywords */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-[12px] font-black text-gray-700 opacity-[0.14] animate-float-rotate uppercase"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              letterSpacing: ".1em",
            }}
          >
            {[
              "Dedication",
              "Innovation",
              "Learning",
              "Perseverance",
              "Discipline",
              "Vision",
              "Professionalism",
              "Integrity",
              "Excellence",
              "Commitment",
              "Passion",
              "Creativity",
              "Problem Solving",
            ][i % 13]}
          </span>
        ))}
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid gap-10 md:grid-cols-3">
        {/* Education */}
        <article className="border-2 border-black bg-white p-7 shadow-2xl transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 rounded-xl">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Education
          </h3>
          <p className="text-lg leading-relaxed">
            Pursuing a{" "}
            <span className="font-bold">B.Tech in Metallurgy & Materials Engineering</span>{" "}
            at <span className="font-bold">IIT Madras</span>, Batch of{" "}
            <span className="font-bold">2027</span>. Committed to academic excellence
            and developing strong research and engineering foundations.
          </p>
        </article>

        {/* Professional Focus */}
        <article className="border-2 border-black bg-gradient-to-br from-green-100 to-green-200 p-7 shadow-2xl transform rotate-[2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 rounded-xl">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Professional Focus
          </h3>
          <p className="text-lg leading-relaxed">
            Passionate about{" "}
            <span className="font-bold">Full-Stack Development</span>,{" "}
            <span className="font-bold">Blockchain</span>, and{" "}
            <span className="font-bold">Web3 ecosystems</span>. I specialize in building
            scalable digital products, distributed systems, and modern cloud-integrated
            architectures with a strong problem-solving mindset.
          </p>
        </article>

        {/* Interests */}
        <article className="border-2 border-black bg-gradient-to-br from-yellow-100 to-yellow-200 p-7 shadow-2xl transform rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-500 rounded-xl">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Interests
          </h3>
          <p className="text-lg leading-relaxed">
            Consistently learning and building in{" "}
            <span className="font-bold">Cloud & DevOps</span>,{" "}
            <span className="font-bold">Distributed Ledger Technology</span>, and{" "}
            <span className="font-bold">AI-powered Web Applications</span>. I thrive on
            turning ideas into functional, impactful and human-centered technology
            solutions.
          </p>
        </article>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes floatRotate {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float-rotate {
          animation: floatRotate 11s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
