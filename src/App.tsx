import React from "react";
import "./styles.css"; 
import Header from "./components/Header";
import Services from "./components/Services";
import PdfViewer from "./components/PDF";
import Youtube from "./components/Youtube";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

//import circuitryBackground from "./components/_Pictures/Backdrop.jpg";
import circuitryBackground from "./components/_Pictures/ChatGPTBackground.png";


// Define the App component as a functional component
const App: React.FC = (props) => {
  return (
    <div className="App">
      <div
        className="circuitry-backdrop"
        style={{ backgroundImage: `url(${circuitryBackground})` }}
      ></div>
      <Header />
      <main className="main-content">
        <Services />
        <PdfViewer />
        <Youtube />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Add this at the end of your main JS file
window.addEventListener('scroll', function() {
  const backdrop = document.querySelector('.circuitry-backdrop');
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
  // Move background at 50% scroll speed
  const bgPositionY = scrollPercent * 50; // 0 to 50%
  backdrop.style.backgroundPosition = `center ${bgPositionY}%`;
});

export default App;
