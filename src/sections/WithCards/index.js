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
  backgroundColor: colors.violet,
  h5: {
    margin: "0.3em 0",
    color: colors.white,
  },
  p: {
    color: colors.white,
  },
});

S.Content = styled.div({
  maxWidth: "1150px",
  margin: "0 auto",
});

S.Cards = styled.div({
  display: "flex",
});

const WithCards = ({ title, heading, cards }) => (
  <S.Container>
    <S.Content>
      <Title title={title} heading={heading} maxWidth="60%" />
      <S.Cards>
        {(Array.isArray(cards) ? cards : [cards]).map(
          ({ title, heading, text }, i) => (
            <Card key={i} title={title} heading={heading}>
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
