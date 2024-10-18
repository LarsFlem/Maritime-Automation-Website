import React from "react";
import "./PDF.css";

// Import the PDF file
import CV_PDF from "./_PDF/Lars_Flem_CV_english.pdf";

// Define the PdfViewer component
const PdfViewer: React.FC = () => {
  return (
    <div className="pdf-viewer-container">
      <h2>CV</h2>
      <object data={CV_PDF} type="application/pdf" width="100%" height="750px">
        <p>
          PDF cannot be displayed. <a href={CV_PDF}>Download the PDF</a>.
        </p>
      </object>
    </div>
  );
};

export default PdfViewer;
