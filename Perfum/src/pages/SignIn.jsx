import { Button, Input } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "60%",
        margin: "0 auto",
        paddingTop: "20px",
        position: "relative",
      }}
    >
      <h1>Sign In</h1>
      <h3>What is your email address</h3>
      <div>
        <label htmlFor="email">My email address is:</label>
        <Input
          id="email"
          style={{ width: "50%", position: "absolute", right: "0px" }}
        />
      </div>
      <h3>Do you have a FragranceX.com Password?</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span>No, I am a new customer</span>
        </label>
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span>Yes, I have a Password</span>
          <Input style={{ width: "50%", position: "absolute", right: "0px" }} />
        </label>
      </div>
      <NavLink
        to="/forgotpassword"
        style={{ textDecoration: "none", color: "black" }}
      >
        Forgot your password ?
      </NavLink>
      <Button
        style={{
          type: "primary",
          width: "100%",
          height: "30px",
          textAlign: "center",
          background: "#302aaf",
          marginTop: "20px",
          color: "white",
        }}
      >
        SIGN IN USING OUR SECURE SERVER
      </Button>
    </div>
  );
};

export default SignIn;
