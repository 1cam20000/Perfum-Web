import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;
const MainContent = () => {
  const { dataKey } = useContext(AppContext);
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Row>
        {dataKey.map((item) => {
          return (
            <NavLink to="" key={item.id}>
              <Col>
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
                    <p>{item.gender}</p>
                    <p>{item.price} </p>
                  </div>
                </Card>
              </Col>
            </NavLink>
          );
        })}
      </Row>
    </div>
  );
};

export default MainContent;
