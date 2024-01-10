import React, { useContext } from "react";
import { AppContext } from "../App";

const TopPick = () => {
  const {dataKey} = useContext(AppContext)
  console.log(dataKey);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Top picks for you</h1>

    </div>
  );
};

export default TopPick;
