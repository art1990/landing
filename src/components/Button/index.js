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
  width: "195px",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "36px",
  color: colors.white,
  background: colors.primary,
  cursor: "pointer",

  "&:hover": {
    background:
      "linear-gradient(180deg, rgba(49, 2, 20, 0.25) 0%, rgba(246, 16, 103, 0) 100%), #F61067",
    backgroundBlendMode: "multiply",
    boxShadow: "0px 8px 16px rgba(246, 16, 103, 0.25)",
    transition: "all .3s",
  },

  "&:active": {
    border: "2px solid rgba(94, 35, 157, 0.5)",
    outline: "none",
  },

  "&:focus": {
    outline: "none",
  },
});

const Button = ({ className, type, children, onClick }) => (
  <S.Button className={className} onClick={onClick} type={type || "button"}>
    {children}
  </S.Button>
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
