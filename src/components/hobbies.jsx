import React from "react";
import trekking from "../assets/trekking.jpg";
import swimming from "../assets/swimming.jpg";
import travel from "../assets/travel.jpg";
import food from "../assets/food.jpg";
import nap from "../assets/powernap.jpg";

export default function Hobbies() {
  const hobbies = [
    { name: "Trekking", img: trekking },
    { name: "Swimming", img: swimming },
    { name: "Solo Traveling", img: travel },
    { name: "Food", img: food },
    { name: "Naps", img: nap },
  ];

  return (
    <section
      id="hobbies"
      className="max-w-6xl mx-auto px-6 py-16 font-serif bg-neutral-50 text-black relative overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-4 mb-12 tracking-tight">
        #What I Enjoy
      </h2>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {hobbies.map((hobby, i) => (
          <article
            key={i}
            className={`border-2 border-black bg-white shadow-md transform transition duration-500 hover:scale-[1.02] p-4 ${
              i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
            }`}
          >
            <img
              src={hobby.img}  // <-- use the imported variable here
              alt={hobby.name}
              className="w-full h-40 object-cover mb-4 border-b-2 border-black"
            />
            <h3 className="text-xl font-black uppercase border-b-2 border-black pb-2 mb-2">
              {hobby.name}
            </h3>
          </article>
        ))}
      </div>

      {/* Floating paper scraps */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-xs font-bold text-gray-400 opacity-50 animate-float-rotate"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {["FUN"][i % 4]}
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
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float-rotate {
          animation: floatRotate 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
