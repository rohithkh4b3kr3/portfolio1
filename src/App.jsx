import React from 'react';
import Navbar from './components/navbar';
import About from './components/About';
import TechStack from './components/Tech';
import Hobbies from './components/hobbies';
import Contact from './components/connect';
// import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <>
      <Navbar />
      <About />
      <TechStack />
      <Hobbies />
      <Contact />
      {/* <Analytics/> */}
    </>
  );
}

export default App;
