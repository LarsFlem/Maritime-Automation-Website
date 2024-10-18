import React from "react";
import "./styles.css"; // Import global styles
import Header from "./components/Header";
import Services from "./components/Services";
import PdfViewer from "./components/PDF";
import Youtube from "./components/Youtube"; // Commenting out the import
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Import the Footer component

import circuitryBackground from "./components/_Pictures/Backdrop.jpg";

// Define the App component as a functional component
const App: React.FC = (props) => {
  return (
    <div className="App">
      <div
        className="circuitry-backdrop"
        style={{ backgroundImage: `url(${circuitryBackground})` }} // Set the background image using inline style
      ></div>
      <Header />
      <main className="main-content">
        <Services />
        <PdfViewer />
        <Youtube />
        <Contact />
      </main>
      <Footer /> {/* Add the footer at the bottom */}
    </div>
  );
};

export default App;
