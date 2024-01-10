import { Input } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div id="header">
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <NavLink
          to="/"
          style={{
            fontSize: "20px",
          }}
        >
          FragranceX
        </NavLink>
        <Input placeholder="Search" />
        <NavLink to="/sign" style={{ width: "80px" }}>
          Sign In
        </NavLink>
        <NavLink
          to="/cart"
          style={{
            width: "90px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            gap: "5px",
          }}
        >
          <IoCartOutline size={30} />
          Cart
        </NavLink>
      </div>
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <NavLink to="/women">Women's Perfume </NavLink>
        <NavLink to="/men">Men's Cologne </NavLink>
      </div>
    </div>
  );
};

export default Header;
