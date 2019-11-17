//react
import React from "react";
import PropTypes from "prop-types";
//assets
import { S } from "sections/WhatWeDo/styles";
import { whatWeDo } from "pages/Home/utils/data";

const WhatWeDo = ({
  title,
  heading,
  sectionListHeading,
  sectionClientsTitle,
  imgLinkArr,
}) => (
  <S.Container>
    <S.Title title={title} heading={heading} />
    <S.Wrapper>
      <S.SectionList>
        {sectionListHeading}
        <S.TextList listArr={whatWeDo.list} />
      </S.SectionList>
      <S.SectionClients>
        <S.SectionClientsTitle>{sectionClientsTitle}</S.SectionClientsTitle>
        <S.SectionClientsLinks>
          {imgLinkArr && imgLinkArr.map(elem => elem)}
        </S.SectionClientsLinks>
      </S.SectionClients>
    </S.Wrapper>
  </S.Container>
);

WhatWeDo.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  sectionListHeading: PropTypes.object,
  sectionClientsTitle: PropTypes.string,
  imgLinkArr: PropTypes.array,
};

export default WhatWeDo;
