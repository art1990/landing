//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, headers, text } from "assets/styles/utils/vars";
import reactIcon from "pages/App/assets/img/reactIcon.svg";

const S = {};

S.Container = styled.div(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
}));

S.Heading = styled.div({
  ...headers.h6,
  color: colors.textHeaders,
  marginTop: "18px",
});

S.ArticleContent = styled.div({ ...text.small, color: colors.textMain });

const ServiceArticle = ({ icon, heading, article }) => {
  return (
    <S.Container>
      <img src={icon || reactIcon} alt="react icon" />
      <S.Heading>{heading}</S.Heading>
      <S.ArticleContent>{article}</S.ArticleContent>
    </S.Container>
  );
};

ServiceArticle.propTypes = {
  icon: PropTypes.element,
  heading: PropTypes.string,
  article: PropTypes.string,
};

export default ServiceArticle;
