import React, { useContext, useEffect, useState } from "react";
import SIdebar from "../components/SIdebar";
import MainContent from "../components/MainContent";
import { AppContext } from "../App";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { dataKey } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("gender")) {
      applyFilters({ gender: [searchParams.get("gender")] });
    }
  }, []);

  useEffect(() => {
    if (searchParams.get("brand")) {
      applyFilters({ gender: [searchParams.get("brand")] });
    }
  },[]);

  const [filteredProducts, setFilteredProducts] = useState(dataKey);

  const applyFilters = (filters) => {
    let filtered = dataKey;
    if (filters.gender.length > 0) {
      filtered = filtered.filter((product) =>
        filters.gender.includes(product.gender)
      );
    }
    if (filters.brand) {
      filtered = filtered.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ display: "flex" }}>
      <SIdebar applyFilters={applyFilters} />
      <MainContent filteredProducts={filteredProducts} />
    </div>
  );
};

export default Products;
