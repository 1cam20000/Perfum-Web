import React from "react";
import TopBrands from "../components/TopBrands";
import TopPick from "../components/TopPick";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      <TopBrands />
      <TopPick />
      <BestSeller />
    </div>
  );
};

export default Home;
