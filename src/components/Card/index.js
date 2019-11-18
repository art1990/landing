//react
import React from "react";
import PropTypes from "prop-types";
//components
import Title from "components/Title";
//assets
import styled from "styled-components/macro";
import { textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({});

const Card = ({ title, titleColor, heading, textStyles, children }) => (
  <S.Container>
    <Title
      title={title}
      heading={<h5>{heading}</h5>}
      text={children}
      titleStyles={
        titleColor
          ? { ...textMisc.titleLarge, color: titleColor }
          : textMisc.titleLarge
      }
      textStyles={textStyles}
    />
  </S.Container>
);

Card.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  textStyles: PropTypes.object,
  titleColor: PropTypes.string,
  children: PropTypes.string,
};

export default Card;
