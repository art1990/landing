//react
import React from "react";
import PropTypes from "prop-types";
//components
import Title from "components/Title";
//assets
import styled from "styled-components/macro";
import { colors, headers, textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop: "110px",
  textAlign: "center",
  backgroundColor: "white",
  color: colors.textHeaders,
});

S.Awards = styled.div({
  display: "flex",
  justifyContent: "space-between",

  marginTop: "20px",
  maxWidth: "900px",
  width: "100%",
});

S.CountContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

S.Count = styled.span({
  ...headers.h1,
});

S.Name = styled.span({
  ...textMisc.titleSmall,
});

const Awards = ({ title, heading, awardsArr }) => (
  <S.Container>
    <Title title={title} heading={heading} maxWidth="680px" />
    <S.Awards>
      {awardsArr &&
        awardsArr.map(({ count, name, color }, i) => (
          <S.CountContainer key={i}>
            <S.Count style={{ color }}>{count}</S.Count>
            <S.Name>{name}</S.Name>
          </S.CountContainer>
        ))}
    </S.Awards>
  </S.Container>
);

Awards.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  awardsArr: PropTypes.array,
};

export default Awards;
