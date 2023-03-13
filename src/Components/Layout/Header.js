import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Header = (props) => {
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
          {!props.isActive ? (
            <h1 className="display-2" style={{ fontFamily: "initial" }}>
              The Generics
            </h1>
          ) : (
            <div>
              <h1 className="display-2" style={{ fontFamily: "initial" }}>
                The Generics
              </h1>
              <Button
                style={{
                  display: "block",
                  border: "1px solid #56CCF2",
                  padding: "15px 30px",
                  background: "inherit",
                  fontSize:'23px',
                  margin:'10px auto'
                }}
              >
                Get our latest album
              </Button>
              <Button
                style={{
                  display: "block",
                  borderRadius:'50%',
                  fontWeight:'200px',
                  border: "2px solid #56CCF2",
                  padding: "15px 30px",
                  background: "inherit",
                  fontSize:'30px',
                  margin:'10px auto',
                  color:'#56CCF2'
                }}
              >►</Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};
export default Header;
