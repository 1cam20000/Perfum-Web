import { Button, Card, Col } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const { Meta } = Card;

const Cart = () => {
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
        <div>
          {productFromLocalStorage.map((item) => (
            <Card
              key={item.id}
              hoverable
              style={{ width: 240, margin: "20px" }}
              cover={<img alt={item.name} src={item.image} />}
            >
              <Meta
                title={item.name}
                style={{ textAlign: "center" }}
                description={item.sold}
              />
              <div style={{ textAlign: "center" }}>
                <h4>Brand : {item.brand}</h4>
                <p>for : {item.gender}</p>
                <p>price : As low as {item.price}.000(VND) </p>
                <Button onClick={removeFromCart}>Detle</Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
