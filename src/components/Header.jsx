import React, { useEffect, useState } from "react";
import BurguerButton from "./BurguerButton.jsx";
import styled from "styled-components";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  // Agregar o quitar la clase 'no-scroll' al body
  useEffect(() => {
    if (clicked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [clicked]);

  return (
    <>
      <NavContainer>
        <h2>Armaly</h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="#h">
            Home
          </a>
          <a onClick={handleClick} href="#h">
            Sobre Mi
          </a>
          <a onClick={handleClick} href="#h">
            Encuentranos
          </a>
          <a onClick={handleClick} href="#h">
            Reparación
          </a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
};
export default Header;

const NavContainer = styled.nav`
  h2 {
    color: #bb1818;
    font-weight: 700;
    font-size: 1.5rem;
    span {
      font-weight: bold;
    }
  }
  height: 70px;
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1.3rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    z-index: 3;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  left: -1000px;
  top: -1000px;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.6s ease;
  overflow-y: hidden;

  &.active {
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: hidden;
  }
`;
