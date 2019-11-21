//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, headers, text, textMisc } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div(({ maxWidth }) => ({
  h3: {
    ...headers.h3,
  },
  h5: {
    ...headers.h5,
  },

  maxWidth: maxWidth || "auto",
}));

S.TextBold = styled.p({
  ...text.regularBold,
});

S.Text = styled.p(({ textStyles }) => ({
  ...text.small,
  ...textStyles,
}));

S.Title = styled.div(({ titleStyles }) => ({
  ...textMisc.titleSmall,
  color: colors.primary,
  ...titleStyles,
}));

const Title = ({
  title,
  heading,
  textBold,
  text,
  maxWidth,
  className,
  titleStyles,
  textStyles,
}) => (
  <S.Container className={className} maxWidth={maxWidth}>
    <S.Title titleStyles={titleStyles}>{title}</S.Title>
    {heading}
    {textBold && <S.TextBold>{textBold}</S.TextBold>}
    {text && <S.Text textStyles={textStyles}>{text}</S.Text>}
  </S.Container>
);

Title.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  textBold: PropTypes.string,
  text: PropTypes.string,
  maxWidth: PropTypes.string,
  className: PropTypes.string,
  titleStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  textStyles: PropTypes.object,
};

export default Title;
