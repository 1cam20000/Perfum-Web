import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

const ProductDetail = () => {
  const { dataKey } = useContext(AppContext);
  console.log(dataKey);
  const ID = useParams();
  console.log(ID);
  const newData = dataKey.find((item) => item.id == productID);
  console.log(newData);
  useEffect(() => {}, []);
  return <div></div>;
};

export default ProductDetail;
