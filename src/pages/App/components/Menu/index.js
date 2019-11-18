//react
import React, { useState } from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";

const S = {};

S.Container = styled.div(({ color, width }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: width + "px" || "auto",

  "& a": { color: color || "white" },

  span: {
    padding: "5px",
  },
}));

S.List = styled.ul(({ isOpen }) => ({
  position: "absolute",
  right: "0px",
  visibility: isOpen ? "visible" : "hidden",
  // transform: `translate(${isOpen ? "0%" : "100%"}, 15%)`,
  padding: "0 10px",
  listStyle: "none",
  backgroundColor: "#a7a7a7",
  borderRadius: "5px",
  // transform: "translateY(15%)",
  transition: "transform .7s ease-in",
  li: {},
}));

const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <S.List isOpen={isOpen}>
        {(Array.isArray(children) ? children : [children]).map(
          (link, index) => (
            <li key={index}>{link}</li>
          ),
        )}
      </S.List>
    </S.Container>
  );
};

Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Menu;
