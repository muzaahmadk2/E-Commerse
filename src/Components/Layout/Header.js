import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Card
        style={{
          marginTop: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "darkgray",
        }}
      >
        <Card.Body
          style={{
            
            color: "white",
            textAlign: "center",
          }}
        >
          <h1 className="display-2" style={{ fontFamily: "initial" }}>
            The Generics
          </h1>
        </Card.Body>
      </Card>
    </>
  );
};
export default Header;
