//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, headers, text } from "assets/styles/utils/vars";
import reactIcon from "pages/App/assets/img/skills icon/reactIcon.svg";

const S = {};

S.Container = styled.div(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
}));

S.Heading = styled.div(({ articleHeaderColor }) => ({
  ...headers.h6,

  color: articleHeaderColor || colors.textHeaders,
  margin: "18px 0 5px 0",
}));

S.ArticleContent = styled.div({ ...text.small, color: colors.textMain });

const ServiceArticle = ({ icon, heading, article, articleHeaderColor }) => {
  return (
    <S.Container>
      <img src={icon || reactIcon} alt="react icon" />
      <S.Heading articleHeaderColor={articleHeaderColor}>{heading}</S.Heading>
      <S.ArticleContent>{article}</S.ArticleContent>
    </S.Container>
  );
};

ServiceArticle.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.string,
  article: PropTypes.string,
  articleHeaderColor: PropTypes.string,
};

export default ServiceArticle;
