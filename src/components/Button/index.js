//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, textMisc } from "assets/styles/utils/vars";

const S = {};

S.Button = styled.button({
  ...textMisc.button,
  height: "45px",
  padding: "0 40px",
  color: colors.white,
  background: colors.primary,
  borderRadius: "36px",
  cursor: "pointer",
  border: "2px solid transparent",
  boxSizing: "border-box",
  "&:hover": {
    background:
      "linear-gradient(180deg, rgba(49, 2, 20, 0.25) 0%, rgba(246, 16, 103, 0) 100%), #F61067",
    backgroundBlendMode: "multiply",
    boxShadow: "0px 8px 16px rgba(246, 16, 103, 0.25)",
  },
  "&:active": {
    border: "2px solid rgba(94, 35, 157, 0.5)",
    boxSizing: "border-box",
    outline: "none",
  },
  "&:focus": {
    outline: "none",
  },
});

const Button = ({ className, children, onClick }) => (
  <S.Button className={className} onClick={onClick}>
    {children}
  </S.Button>
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
