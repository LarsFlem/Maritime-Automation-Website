import React, { useEffect, useRef } from "react";
import "./PDF.css";
import CV_PDF from "./_PDF/Lars_Flem_CV_english.pdf";

const PdfViewer: React.FC = () => {
  const pdfRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    if (pdfRef.current) {
      const windowHeight = window.innerHeight;

      if (window.innerWidth > 768) {
        // Set height dynamically for larger screens
        pdfRef.current.style.height = `${windowHeight - 150}px`; // Adjust as needed
      } else {
        // On mobile, allow scrolling and set auto height
        pdfRef.current.style.height = "auto";
      }
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
