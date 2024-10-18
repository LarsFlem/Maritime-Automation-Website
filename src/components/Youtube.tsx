import React from "react";
import "./Youtube.css"; // Import the CSS for the Youtube component

const Youtube: React.FC = () => {
  return (
    <div className="youtube-container">
      <div className="youtube-video-wrapper">
        {" "}
        {/* Keep just this wrapper */}
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/LHXEMvQGN-E" // Replace with your actual video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
