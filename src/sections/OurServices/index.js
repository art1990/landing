//react
import React from "react";
import PropTypes from "prop-types";
//components
import ServiceArticle from "pages/App/components/ServiceArticle";
import Title from "components/Title";
//assets
import styled from "styled-components/macro";
import { colors, quote, text } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div(({ paddingTop }) => ({
  paddingTop: paddingTop + "px",
  maxWidth: "1175px",
  margin: "0 auto",
  color: colors.textHeaders,
}));

S.ServicesContainer = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 26%)",
  gridColumnGap: "85px",
  gridRowGap: "65px",
  alignItems: "start",
});

S.Title = styled(Title)({
  marginBottom: "55px",
});

S.QuoteContainer = styled.figure({
  position: "relative",
  zIndex: "0",
  margin: "120px 0 0 0",
  display: "flex",
  flexDirection: "column",
  blockquote: {
    ...quote.small,
    margin: "0",
    padding: "75px 200px 75px 100px",
    maxWidth: "715px",
    color: colors.white,
    backgroundColor: colors.lightPurple,
  },
  img: {
    position: "absolute",
    right: "2%",
    top: "-45%",
  },
  figcaption: {
    ...text.regularBold,
    color: colors.primary,
    padding: "55px 0 0 100px",
    span: {
      ...text.regular,
      color: colors.textHeaders,
    },
  },
});

const OurServices = ({
  title,
  heading,
  text,
  articles,
  quote = {},
  paddingTop,
}) => {
  const { quoteText, photo, autor, company } = quote;

  return (
    <S.Container paddingTop={paddingTop}>
      <S.Title title={title} heading={heading} />
      {/*<S.Text></S.Text>*/}
      <S.ServicesContainer>
        {articles.map(({ heading, article }, i) => (
          <ServiceArticle key={i} heading={heading} article={article} />
        ))}
      </S.ServicesContainer>
      {quote && (
        <S.QuoteContainer>
          <blockquote>{quoteText}</blockquote>
          <img src={photo} alt="photo autor" />
          <figcaption>
            {autor} - <span>{company}</span>
          </figcaption>
        </S.QuoteContainer>
      )}
    </S.Container>
  );
};

OurServices.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  text: PropTypes.string,
  articles: PropTypes.array,
  quote: PropTypes.object,
  paddingTop: PropTypes.number,
};

export default OurServices;
