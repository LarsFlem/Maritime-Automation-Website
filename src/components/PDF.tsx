import React, { useEffect, useRef } from "react";
import "./PDF.css";

// Import the PDF file
import CV_PDF from "./_PDF/Lars_Flem_CV_english.pdf";

// Define the PdfViewer component
const PdfViewer: React.FC = () => {
  const pdfRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    if (pdfRef.current) {
      // Calculate the height dynamically based on the window height
      const windowHeight = window.innerHeight;
      pdfRef.current.style.height = `${windowHeight - 150}px`; // Subtract header/footer or any margin as needed
    }
  }, []);

  return (
    <div className="pdf-viewer-container">
      <h2>CV</h2>
      <object ref={pdfRef} data={CV_PDF} type="application/pdf" width="100%">
        <p>
          PDF cannot be displayed. <a href={CV_PDF}>Download the PDF</a>.
        </p>
      </object>
    </div>
  );
};

export default PdfViewer;
