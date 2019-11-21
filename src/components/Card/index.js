//react
import React from "react";
import PropTypes from "prop-types";
//components
import Title from "components/Title";
//assets
import styled from "styled-components/macro";
import { colors } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div(({ padding, variantRed, variant2 }) => {
  const white = (variantRed || variant2) && colors.white;

  return {
    padding: padding || "70px 35px 75px 35px",
    backgroundColor: variantRed ? colors.primary : "transparent",
    border: variant2 ? "1px solid rgba(255, 255, 255, 0.2)" : "transparent",
    boxSizing: "border-box",

    h5: {
      color: white || colors.textHeaders,
      margin: "5px 0",
    },

    p: {
      color: white || colors.textMain,
      margin: "0",
    },
  };
});

const Card = ({
  title,
  heading,
  padding,
  children,
  className,
  variantRed,
  variant2,
}) => (
  <S.Container
    className={className}
    variantRed={variantRed}
    variant2={variant2}
    padding={padding}
  >
    <Title
      title={title}
      heading={<h5>{heading}</h5>}
      text={children}
      titleStyles={variantRed && { color: colors.white }}
    />
  </S.Container>
);

Card.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  padding: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  variantRed: PropTypes.bool,
  variant2: PropTypes.bool,
};

export default Card;
