import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:yourmail@example.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16 font-serif bg-neutral-50 text-black relative"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center uppercase border-b-4 border-black pb-4 mb-12 tracking-tight">
        #Contact & Connect
      </h2>

      <div className="flex flex-col md:flex-row justify-around gap-12">
        {/* Social Links */}
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://x.com/RohithVish41515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaTwitter size={30} /> X (Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/rohith-vishva-65831928a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-700 transition"
          >
            <FaLinkedin size={30} /> LinkedIn
          </a>
          <a
            href="https://github.com/rohithkh4b3kr3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-800 transition"
          >
            <FaGithub size={30} /> GitHub
          </a>
          <a
            href="rohithvishva946@gmail.com"
            className="flex items-center gap-2 hover:text-red-500 transition"
          >
                <FaEnvelope size={30} /> rohithvishva946@gmail.com
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full md:w-1/2 border-2 border-black p-6 shadow-md bg-white rotate-[-1deg] hover:rotate-0 transition-transform duration-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border-b-2 border-black p-2 text-lg outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-black p-2 text-lg outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 border-black p-2 text-lg outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white font-bold uppercase py-2 mt-2 hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Floating newspaper scraps */}
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
            {["CONTACT", "CONNECT",][i % 4]}
          </span>
        ))}
      </div>

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
