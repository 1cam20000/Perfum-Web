import React from "react";
import SIdebar from "../components/SIdebar";
import MainContent from "../components/MainContent";

const ManPerfum = () => {
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          color: "#21165e",
          fontSize: "28px",
          fontWeight: "400",
          paddingBottom: "4px",
        }}
      >
        Discount Cologne For Men
      </div>
      <div style={{ display: "flex" }}>
        <SIdebar  />
        <MainContent />
      </div>
    </div>
  );
};

export default ManPerfum;
