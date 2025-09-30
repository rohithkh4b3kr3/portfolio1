import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16 font-serif bg-neutral-50 text-black relative overflow-hidden"
    >
      {/* Header like newspaper title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-2 mb-12 tracking-tight">
        #KNOW ME BETTER
      </h2>

      {/* Floating hashtags like random newspaper cutouts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className={`absolute text-[10px] font-bold text-gray-700 opacity-50 animate-float-rotate`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            {[
              "#BugMagnet",
              "#DeployAndPray",
              "#CtrlCV",
              "#404Found",
              "#StackOverflowAddict",
              "#JSFatigue",
              "#CoffeeOverSleep",
              "#ConsoleError",
              "#BlockchainBruh",
              "#CryptoMystic",
              "#TerminalNews",
              "#InfiniteLoop",
            ][i % 12]}
          </span>
        ))}
      </div>

      {/* Collage-style layout */}
      <div className="relative z-10 grid gap-8 md:grid-cols-3">
        {/* Education */}
        <article className="border-2 border-black bg-amber-50 p-6 shadow-xl transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Education
          </h3>
          <p className="text-lg leading-relaxed">
             Surviving a{" "}
            <span className="font-bold">B.Tech in Metallurgy & Materials</span> at{" "}
            <span className="font-bold">IIT Madras</span>, Batch{" "}
            <span className="font-bold">2027</span>. hope I graduate before my brain melts.
          </p>
        </article>

        {/* What I Do */}
        <article className="border-2 border-black bg-red-50 p-6 shadow-xl transform rotate-[3deg] hover:rotate-0 transition-all duration-500">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            What I Do
          </h3>
          <p className="text-lg leading-relaxed">
            By daylight:{" "}
            <span className="font-bold">Fullstack Developer</span>. By moonlight:{" "}
            <span className="font-bold">Blockchain Rookie </span>Summoning smart contracts, with a special skill: generating bugs faster than deadlines.
          </p>
        </article>

        {/* Hobbies */}
        <article className="border-2 border-black bg-green-50 p-6 shadow-xl transform rotate-[-4deg] hover:rotate-0 transition-all duration-500">
          <h3 className="text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
            Hobbies
          </h3>
          <p className="text-lg leading-relaxed">
            #404NotFound includes{" "}
            <span className="font-bold">trekking</span>,{" "}
            <span className="font-bold">Music </span>,{" "}
            <span className="font-bold">solo traveling</span>,{" "}
            <span className="font-bold">swimming (away from problems)</span>, and the occasional{" "}
            <span className="font-bold">power nap</span>.
          </p>
        </article>
      </div>
      {/* Long Div */}

      
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
