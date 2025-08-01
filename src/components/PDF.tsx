import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "./PDF.css";

// Import the PDF file
import CV_PDF from "./_PDF/Lars_Flem_CV_english.pdf";

// Define the PdfViewer component
const PdfViewer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport width is less than or equal to 768px (common mobile width)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If on a mobile device, display a message instead of the PDF
  if (isMobile) {
    return (
      <div className="pdf-viewer-container">
        <h2>CV</h2>
        <p>
          PDF not displayed on mobile devices.{" "}
          <a href={CV_PDF}>Download the PDF</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="pdf-viewer-container">
      <h2>CV</h2>
      <Document file={CV_PDF}>
        <Page pageNumber={1} width={800} />
        <Page pageNumber={2} width={800} />
      </Document>
    </div>
  );
};

export default PdfViewer;
