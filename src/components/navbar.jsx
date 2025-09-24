// import React, { useState, useEffect } from "react";
// import '../components/app.css';

// export default function NewspaperNavbar({ activeSection, setActiveSection }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [displayedText, setDisplayedText] = useState(""); // Typing effect
//   const name = "Rohith Vishva";

//   // Typing animation
//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayedText(name.slice(0, i + 1));
//       i++;
//       if (i === name.length) clearInterval(interval);
//     }, 15);
//     return () => clearInterval(interval);
//   }, []);

//   const links = [
//     { id: "about", label: "ABOUT" },
//     { id: "tech", label: "TECH SECTION" },
//     { id: "projects", label: "PROJECTS & EXPERIENCE" },
//     { id: "contact", label: "CONTACT" },
//   ];

//   const hashtags = [
//     "#WebDev", "#React", "#Portfolio", "#JavaScript", "#NodeJS",

//     "#Frontend", "#Backend", "#FullStack" , "#Developer",
//      "#OpenSource" , "#WEB3" , "#SOLIDITY" , "#ETHEREUM", "#Blockchain",
//   ];

//   return (
//     <nav className="border-y-4 border-black bg-amber-100 relative overflow-hidden">
//       {/* Top Row: Name + Nav */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 font-serif">
        
//         {/* Headline with typing effect */}
//         <div className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4 md:mb-0">
//           <span className="border-b-2 border-black pr-1">{displayedText}</span>
//           <span className="animate-pulse">|</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-10 text-lg font-bold">
//           {links.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => setActiveSection(link.id)}
//               className={`hover:underline ${
//                 activeSection === link.id ? "underline" : ""
//               }`}
//             >
//               {link.label}
//             </button>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? "✖" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden border-t-2 border-black bg-amber-50 flex flex-col items-center space-y-4 py-4 font-bold text-lg">
//           {links.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => {
//                 setActiveSection(link.id);
//                 setIsOpen(false);
//               }}
//               className={`hover:underline ${
//                 activeSection === link.id ? "underline" : ""
//               }`}
//             >
//               {link.label}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Hashtag ticker below navbar */}
//       <div className="border-t-2 border-black bg-amber-200 overflow-hidden">
//         <div className="whitespace-nowrap animate-marquee py-2 text-sm font-semibold text-gray-700">
//           {hashtags.map((tag, i) => (
//             <span key={i} className="mx-6">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }



import React, { useState, useEffect } from "react";
import '../components/app.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [displayedText, setDisplayedText] = useState("");
  const name = "Rohith Vishva";

  // Typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(name.slice(0, i + 1));
      i++;
      if (i === name.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll to highlight active section
  useEffect(() => {
    const sections = ["about", "tech", "hobbies", "contact"];
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sec);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: "ABOUT" },
    { id: "techstack", label: "TECH SECTION" },
    { id: "hobbies", label: "HOBBIES" },
    { id: "contact", label: "CONTACT" },
  ];

  const hashtags = [
    "#WebDev", "#React", "#Portfolio", "#JavaScript", "#NodeJS",
    "#Frontend", "#Backend", "#FullStack", "#Developer",
    "#OpenSource", "#WEB3", "#SOLIDITY", "#ETHEREUM", "#Blockchain",
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="border-y-4 border-black bg-amber-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 font-serif">
        
        {/* Name Typing */}
        <div className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4 md:mb-0">
          <span className="border-b-2 border-black pr-1">{displayedText}</span>
          <span className="animate-pulse">|</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-bold">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:underline ${
                activeSection === link.id ? "underline" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black bg-amber-50 flex flex-col items-center space-y-4 py-4 font-bold text-lg">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:underline ${
                activeSection === link.id ? "underline" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Hashtag ticker */}
      <div className="border-t-2 border-black bg-amber-200 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-2 text-sm font-semibold text-gray-700">
          {hashtags.map((tag, i) => (
            <span key={i} className="mx-6">{tag}</span>
          ))}
        </div>
      </div>
    </nav>
  );
}
