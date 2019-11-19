//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import header from "pages/Home/assets/img/header.svg";
import { colors } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div(() => ({
  color: colors.white,
  backgroundColor: "#5E239D",
  backgroundImage: `url(${header}), linear-gradient(90deg, #5E239D 0%, rgba(196, 196, 196, 0) 56.77%)`,
  backgroundBlendMode: "multiply",
  gridTemplateRows: "30% 40% 10% 20%",
  gridTemplateColumns: "30% 40% 10% 20%",
  padding: "250px 0 125px 0",
}));

S.Content = styled.div(() => ({
  maxWidth: "1150px",
  margin: "0 auto",
}));

S.Section = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

S.HeadlineContainer = styled.div(() => ({
  maxWidth: "60%",
}));
const PageHeader = ({ title, heading, scroll, subHeader }) => {
  return (
    <S.Container>
      <S.Content>
        <S.Section>
          <S.HeadlineContainer>
            {title}
            {heading}
          </S.HeadlineContainer>
          <div
            style={{
              background: "white",
              width: "29px",
              height: "343px",
              marginTop: "-10px",
            }}
          />
        </S.Section>
        <div style={{ background: "grey", width: "833px", height: "108px" }} />
      </S.Content>
    </S.Container>
  );
};

PageHeader.propTypes = {
  title: PropTypes.element,
  heading: PropTypes.element,
};

export default PageHeader;
