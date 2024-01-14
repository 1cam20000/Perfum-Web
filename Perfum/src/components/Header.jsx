import { Input } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div id="header" >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <NavLink
            to="/"
            style={{
              fontSize: "30px",
            }}
          >
            FragranceX
          </NavLink>
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              flexDirection: "row",
              margin: "0 auto",
            }}
          >
            <NavLink
              to="/freeShipping"
              style={{ border: "1px solid white", padding: "5px" }}
            >
              FREE SHIPPING
            </NavLink>
            <span style={{ color: "white", padding:"5px" }}>
              , Item Ship Out Today -{" "}
            </span>
            <NavLink to="/products">
              <div id="item">
                <div id="highlight"></div>
                <span style={{ color: "white"}}>
                  Order Now!!!
                </span>
              </div>
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: "20px",
            }}
          >
            <NavLink
              to="/sign"
              style={{
                width: "80px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
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
                marginRight: "10px",
              }}
            >
              <IoCartOutline size={30} />
              Cart
            </NavLink>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <NavLink to="/products?gender=women">Women's Perfume </NavLink>
          <NavLink to="/products?gender=men">Men's Cologne </NavLink>
          <NavLink to="/products">In Stock</NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
