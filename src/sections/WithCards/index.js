//react
import React from "react";
import PropTypes from "prop-types";
//components
import Title from "components/Title";
import Card from "components/Card";
//assets
import styled from "styled-components/macro";
import { colors } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  marginTop: "-70px",
  padding: "250px 0 305px 0",
  backgroundColor: colors.violet,
});

S.Title = styled(Title)({
  h5: { color: colors.white, margin: "0.3em 0 2em 0" },
});

S.Content = styled.div({
  maxWidth: "1150px",
  margin: "0 auto",
});

S.Cards = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridColumnGap: "30px",
});

const WithCards = ({ title, heading, cards }) => (
  <S.Container>
    <S.Content>
      <S.Title title={title} heading={heading} maxWidth="60%" />
      <S.Cards>
        {(Array.isArray(cards) ? cards : [cards]).map(
          ({ title, heading, text }, i) => (
            <Card
              key={i}
              title={title}
              heading={heading}
              variantRed={i === 0}
              variant2={i !== 0}
            >
              {text}
            </Card>
          ),
        )}
      </S.Cards>
    </S.Content>
  </S.Container>
);

WithCards.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  cards: PropTypes.array,
};

export default WithCards;
