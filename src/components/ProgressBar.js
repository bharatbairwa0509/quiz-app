import React from "react";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <div style={{ width: "100%", background: "#ddd" }}>
      <div style={{ width: `${progress}%`, background: "#4CAF50", height: "20px" }}></div>
    </div>
  );
};

export default ProgressBar;
