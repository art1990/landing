//react
import React, { useState } from "react";
import PropTypes from "prop-types";
//assets
import { S } from "pages/App/components/Menu/styles";

const Menu = ({ children, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Button onClick={() => setIsOpen(!isOpen)}>
        {Array.from(Array(3)).map((e, i) => (
          <S.HamburgerLine key={i} color={color} />
        ))}
      </S.Button>
      <S.List isOpen={isOpen} onClick={() => setIsOpen(false)}>
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
  color: PropTypes.string,
};

export default Menu;
