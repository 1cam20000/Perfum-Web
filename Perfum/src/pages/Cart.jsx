import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Cart = (product) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        paddingTop: "50px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <h1>Shopping Cart</h1>
        <h4>Tour shopping cart does not appear to be smelling so sweetly</h4>
        <NavLink to="/">
          <Button type="primary" style={{ width: "335px", height: "45px" }}>
            Continue shopping
          </Button>
        </NavLink>
      </div>
      <div className="Helps">
        <div className="boxLeft">
          <NavLink to="/women">
            Wommen's Perfum
            <FaArrowRight />
          </NavLink>
          <NavLink to="/men">
            Men's Perfum
            <FaArrowRight />
          </NavLink>
          <NavLink to="/">
            Home
            <FaArrowRight />
          </NavLink>
        </div>
        <div className="boxRight">
          <h1 style={{ color: "#22165e" }}>Need Help ?</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
