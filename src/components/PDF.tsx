import React, { useEffect, useRef, useState } from "react";
import "./PDF.css";

// Import the PDF file
import CV_PDF from "./_PDF/Lars_Flem_CV_english.pdf";

// Define the PdfViewer component
const PdfViewer: React.FC = () => {
  const [isIOS, setIsIOS] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null); // Ref for iframe
  const objectRef = useRef<HTMLObjectElement>(null); // Ref for object

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Detect iOS (iPhone/iPad) - updated condition to not use window.opera
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
    setIsIOS(isIOSDevice);
  }, []);

  return (
    <div className="pdf-viewer-container">
      <h2>CV</h2>
      {isIOS ? (
        <iframe
          ref={iframeRef}
          src={CV_PDF}
          width="100%"
          height="750px"
          style={{ border: 'none' }} // You can also set border here if needed
        >
          <p>
            PDF cannot be displayed. <a href={CV_PDF}>Download the PDF</a>.
          </p>
        </iframe>
      ) : (
        <object
          ref={objectRef}
          data={CV_PDF}
          type="application/pdf"
          width="100%"
          height="750px"
        >
          <p>
            PDF cannot be displayed. <a href={CV_PDF}>Download the PDF</a>.
          </p>
        </object>
      )}
    </div>
  );
};

export default PdfViewer;
