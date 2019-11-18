//react
import React from "react";
import PropTypes from "prop-types";
//sections
import BackgroundOutsideContent from "pages/App/components/BackgroundOutcsideContent";
//assets
import styled from "styled-components/macro";
import { textMisc } from "assets/styles/utils/vars";

const S = {};

S.ClientsTitle = styled.div({
  ...textMisc.titleSmall,
  marginBottom: "80px",
});

S.ClientsLinks = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(2, min-content)",
  gridGap: "95px 130px",
});

S.TextSection = styled.div({
  paddingTop: "40px",
  marginLeft: "125px",
});

const Clients = ({
  title,
  heading,
  background,
  headingSectionWithBackground,
  listArr,
  sectionClientsTitle,
  imgLinkArr,
}) => {
  const textSection = (
    <S.TextSection>
      <S.ClientsTitle>{sectionClientsTitle}</S.ClientsTitle>
      <S.ClientsLinks>
        {imgLinkArr && imgLinkArr.map(elem => elem)}
      </S.ClientsLinks>
    </S.TextSection>
  );

  return (
    <BackgroundOutsideContent
      title={title}
      heading={heading}
      background={background}
      headingSectionWithBackground={headingSectionWithBackground}
      listArr={listArr}
      itemArr={[
        {
          background,
          textSection,
        },
      ]}
    />
  );
};

Clients.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  background: PropTypes.array,
  sectionClientsTitle: PropTypes.string,
  headingSectionWithBackground: PropTypes.object,
  imgLinkArr: PropTypes.array,
  listArr: PropTypes.array,
};

export default Clients;
