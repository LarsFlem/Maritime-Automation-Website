import React, { useEffect, useRef, useState } from "react";
import "./PDF.css";
import CV_PDF from "./_PDF/Lars_Flem_CV_english.pdf";

const PdfViewer: React.FC = () => {
  const [isIOS, setIsIOS] = useState(false);
  const pdfRef = useRef<HTMLIFrameElement | HTMLObjectElement>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    // Detect iOS (iPhone/iPad)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsIOS(true);
    }
  }, []);

  return (
    <div className="pdf-viewer-container">
      <h2>CV</h2>

      {isIOS ? (
        // Use an iframe for iOS devices or a link as a fallback
        <iframe
          ref={pdfRef}
          src={CV_PDF}
          width="100%"
          height="750px"
          title="CV"
        >
          <p>
            PDF cannot be displayed. <a href={CV_PDF}>Download the PDF</a>.
          </p>
        </iframe>
      ) : (
        // Use the object element for non-iOS devices
        <object
          ref={pdfRef}
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
