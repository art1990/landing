//react
import React from "react";
import PropTypes from "prop-types";
//sections
import BackgroundOutsideContent from "sections/BackgroundOutcsideContent";
//assets
import styled from "styled-components/macro";
import { textMisc } from "assets/styles/utils/vars";

const S = {};

S.SectionClientsTitle = styled.div({
  ...textMisc.titleSmall,
  marginBottom: "80px",
});

S.SectionClientsLinks = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(2, min-content)",
  gridGap: "95px 130px",
});

const Clients = ({
  title,
  heading,
  background,
  headingSectionWithBackground,
  listArr,
  sectionClientsTitle,
  imgLinkArr,
}) => (
  <BackgroundOutsideContent
    title={title}
    heading={heading}
    background={background}
    headingSectionWithBackground={headingSectionWithBackground}
    listArr={listArr}
  >
    <>
      <S.SectionClientsTitle>{sectionClientsTitle}</S.SectionClientsTitle>
      <S.SectionClientsLinks>
        {imgLinkArr && imgLinkArr.map(elem => elem)}
      </S.SectionClientsLinks>
    </>
  </BackgroundOutsideContent>
);

Clients.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  background: PropTypes.string,
  sectionClientsTitle: PropTypes.string,
  headingSectionWithBackground: PropTypes.string,
  imgLinkArr: PropTypes.array,
  listArr: PropTypes.array,
};

export default Clients;
