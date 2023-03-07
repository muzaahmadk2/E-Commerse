import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Card className="mt-1" >
        <Card.Body style={{backgroundColor:'darkgray',color:'white'}}>
          <h1 className="display-2" style={{fontFamily:'initial'}}>The Generics</h1>
        </Card.Body>
      </Card>
    </>
  );
};
export default Header;
