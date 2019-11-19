//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, text, textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.input({
  ...text.small,

  color: colors.textHeaders,
  background: colors.white,
  border: "1px solid #F4F4ED",
  boxSizing: "border-box",
  height: "55px",
  width: "100%",
  padding: "0 20px",

  ":hover": {
    border: "2px solid #5E239D",
    boxSizing: "border-box",
    boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.5)",
  },

  ":active, :focus": {
    outline: "none",
    boxShadow: "none",
    border: "2px solid #00F0B5",
  },

  "::-webkit-input-placeholder": {
    ...textMisc.titleLarge,
    color: colors.textGrey,
  },
});

const Input = ({ placeholder }) => <S.Container placeholder={placeholder} />;

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
