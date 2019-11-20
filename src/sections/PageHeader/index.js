//react
import React from "react";
import PropTypes from "prop-types";
//components
import IconButton from "components/IconButton";
//assets
import styled from "styled-components/macro";
import header from "pages/Home/assets/img/header.svg";
import { colors } from "assets/styles/utils/vars";
import arrow from "assets/img/arrowDown.svg";

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

S.Section = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1150px",
  margin: "0 auto",
}));

S.HeadlineContainer = styled.div(() => ({
  maxWidth: "70%",
}));

S.ScrollContainer = styled(IconButton)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "auto",
  padding: "0",
  background: "none",

  span: {
    writingMode: "tb-rl",
    margin: "0",
    color: colors.white,
    lineHeight: "10px",
  },

  img: {
    marginTop: "25px",
  },

  ":active": {
    borderRadius: "0 0 10px 10px",
  },
});

const PageHeader = ({ title, heading, hasScroll, button }) => {
  return (
    <S.Container>
      <div>
        <S.Section>
          <S.HeadlineContainer>
            {title}
            {heading}
          </S.HeadlineContainer>
          {hasScroll && (
            <S.ScrollContainer icon={arrow}>
              Scroll to see more
            </S.ScrollContainer>
          )}
        </S.Section>
        <div style={{ background: "grey", width: "833px", height: "108px" }} />
      </div>
    </S.Container>
  );
};

PageHeader.propTypes = {
  title: PropTypes.element,
  heading: PropTypes.element,
  hasScroll: PropTypes.bool,
};

export default PageHeader;
