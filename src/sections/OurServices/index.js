//react
import React from "react";
import PropTypes from "prop-types";
//components
import ServiceArticle from "pages/App/components/ServiceArticle";
//assets
import styled from "styled-components/macro";
import { textMisc, colors, headers } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div(() => ({
  paddingTop: "180px",
  maxWidth: "1175px",
  margin: "0 auto",
}));

S.Title = styled.div({ ...textMisc.titleMedium, color: colors.primary });

S.Heading = styled.h3({
  ...headers.h3,
});

S.ServicesContainer = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridColumnGap: "74px",
  gridRowGap: "64px",
  alignItems: "start",
});

const OurServices = ({ title, heading, text, articles }) => {
  return (
    <S.Container>
      <S.Title>What we can do?</S.Title>
      <S.Heading>Our services</S.Heading>
      {/*<S.Text></S.Text>*/}
      <S.ServicesContainer>
        {articles.map(({ heading, article }, i) => (
          <ServiceArticle key={i} heading={heading} article={article} />
        ))}
      </S.ServicesContainer>
      {/*<S.Content>gg</S.Content>*/}
    </S.Container>
  );
};

OurServices.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  articles: PropTypes.array,
};

export default OurServices;
