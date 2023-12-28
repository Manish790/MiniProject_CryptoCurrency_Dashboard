import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import '../styles/header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} className="nav-container">
      <div className="navbar">
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/">Home</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
        
      </div>
    </HStack>
  );
};

export default Header;
