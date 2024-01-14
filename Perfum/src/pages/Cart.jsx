import { Button, Card, Col, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const { Meta } = Card;

const Cart = () => {
  //

  const [productFromLocalStorage, setProductFromLocalStorage] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cart")) || [];
    setProductFromLocalStorage(storedData);
  }, []);
  const removeFromCart = (index) => {
    const updatedCart = [...productFromLocalStorage];
    updatedCart.splice(index, 1);
    setProductFromLocalStorage(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  //
  const [priceOneItem, setPriceOnItem] = useState(1);
  const handleInputNumber = (value) => {
    setPriceOnItem(value);
  };
  return (
    <div>
      {productFromLocalStorage.length === 0 ? (
        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            paddingTop: "50px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h1>Shopping Cart</h1>
            <h4>
              Tour shopping cart does not appear to be smelling so sweetly
            </h4>
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
      ) : (
        <div style={{ margin: "40px" }}>
          <h1>YOUR CART:</h1>
          <br />
          <NavLink to="/products">Continue Shopping</NavLink>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Product Indormation</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productFromLocalStorage.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                      textAlign: "center",
                    }}
                  >
                    <img src={item.image} alt="" />
                    <div
                      style={{
                        display: "flex",
                        width: "auto",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h3>{item.name}</h3>
                      <p>by {item.brand}</p>
                      <p>In Stock</p>
                      <Button onClick={removeFromCart}>Remove</Button>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p> ₫{item.price}.000 Regular Price</p>
                    <p> ₫{item.price - 100}.000 After Coupon</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <InputNumber
                      min={1}
                      max={10}
                      defaultValue={1}
                      onChange={handleInputNumber}
                    />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    ₫{item.price * priceOneItem}.000
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
