import React from "react";
import "./styles.css"; 
import Header from "./components/Header";
import Services from "./components/Services";
import PdfViewer from "./components/PDF";
import Youtube from "./components/Youtube";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

import circuitryBackground from "./components/_Pictures/Backdrop.jpg";

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

export default App;
