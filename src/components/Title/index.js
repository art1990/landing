//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, headers, text, textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  h3: {
    ...headers.h3,
  },
  h5: {
    ...headers.h5,
  },
  p: {
    ...text.regularBold,
  },
});

S.Title = styled.div({
  ...textMisc.titleSmall,
  color: colors.primary,
});

const Title = ({ title, heading, text, className }) => (
  <S.Container className={className}>
    <S.Title>{title}</S.Title>
    {heading}
    <p>{text}</p>
  </S.Container>
);

Title.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
