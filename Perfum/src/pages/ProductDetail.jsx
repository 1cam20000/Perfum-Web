import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import { Alert, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  //

  const { dataKey } = useContext(AppContext);
  const params = useParams();
  const newData = dataKey.find((item) => item.id == params?.ID);
  // console.log(newData);

  //
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const options = { month: "long" };
      setCurrentMonth(today.toLocaleString("en-US", options));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  //
  const handleAddCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(newData);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    <Alert message="Success Add" type="success" />;
    alert("success add");
  };
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      <div className="left" style={{ width: "300px" }}>
        <img src={newData.image} alt={newData.name} />
      </div>
      <div className="right">
        <div className="info">
          <h1>{newData.name}</h1>
          <span>
            By {newData.brand} for {newData.gender}
          </span>
          <h2>About the product</h2>
          <p>
            {newData.name} for {newData.gender} is a fresh, vibrant perfume
            that's citric base makes it perfect for those sparkling warm summer
            days that lead to perfect summer evenings that seem to last forever.
            Light Blue features notes of green apple, Sicilian lemon, bluebell,
            and cedar layered with jasmine, bamboo, white rose, and a base of
            amber, musk, and wood all wrapped up in one captivating scent that
            truly encapsulates the joy of living on a beautiful day. Housed in a
            clear bottle with a silver and blue cap, Light Blue has a
            refreshingly youthful essence to it that makes it truly irresistible
            so no matter what you have planned for the day, you’re guaranteed to
            turn heads wherever you go.
          </p>
          <p>
            Light Blue was developed by the master perfumer Olivier Cresp after
            being tasked by the Italian designer duo Domenico Dolce and Stefano
            Gabbana to create a fragrance that evokes what it’s like to be in
            Sicily. It was a long process that took two years to perfect, but
            the end result is the iconic summertime scent that fragrance lovers
            have adored ever since it found its way into the market in 2001. One
            spritz of Light Blue can last for up to four or five hours and since
            it is a lighter perfume, it does not contain an overpowering aroma.
            While this may mean that the sillage is not as strong as other
            scents, the longer you wear it the more it changes from the fresh
            and youthful citrus and apple scent that you notice right away to a
            more gentle amber and cedar scent.
          </p>
          <p>
            Since its introduction to the market, Light Blue has won multiple
            fragrance awards including a FiFi award and a 5 Star Rating from
            news outlets like the New York Times, solidifying its place in the
            fragrance world. It was even one of twelve curated fragrances for an
            exhibit at the Museum of Arts and Design titled “The Art of Scent
            1889-2012” which proves that Light Blue is a masterpiece of youthful
            summer scents that any woman would be proud to wear.
          </p>
          <h3>Fragrance Family</h3>
          <p>Floral</p>
          <h3>Scent Type</h3>
          <p>Fresh, citrus</p>
          <h3>Notes:</h3>
          <p>
            Top notes are Sicilian Lemon, Apple, Cedar and Bellflower; middle
            notes are Bamboo, Jasmine and White Rose; base notes are Cedar, Musk
            and Amber.
          </p>
        </div>
        <div className="btn">
          <h1>Price with Coupon</h1>
          <h2 style={{ fontSize: "50px" }}>đ {newData.price}.000</h2>
          <p>or 4 payments of đ {newData.price - 100}.000 with member</p>
          <h2>Delivery</h2>
          <h2>
            {currentMonth} {today.getDate() + 2}-{today.getDate() + 4}
          </h2>
          <Button
            style={{ width: "100%", color: "rgb(48 42 175)", margin: "10px" }}
            type="primary"
            onClick={handleAddCart}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
