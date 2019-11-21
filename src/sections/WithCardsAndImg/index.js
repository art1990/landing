//react
import React, { useMemo } from "react";
import PropTypes from "prop-types";
//utils
import { workplace } from "pages/Services/utils/data";
//assets
import { S } from "sections/WithCardsAndImg/styles";

const generateTextSectionArr = (imgArr, cards) =>
  cards.map(({ title, heading, text }, i) => ({
    background: `url(${imgArr[i]})`,
    textSection: (
      <S.Card title={title} heading={heading}>
        {text}
      </S.Card>
    ),
  }));

const WithCardsAndImg = ({ title, heading, textAfterHeading }) => {
  const { imgArr, cards } = workplace;

  const textSectionArr = useMemo(() => generateTextSectionArr(imgArr, cards), [
    imgArr,
    cards,
  ]);

  return (
    <S.Container>
      <S.BackgroundOutsideContent
        title={title}
        heading={heading}
        textAfterHeading={textAfterHeading}
        isReverse
        itemArr={textSectionArr}
      />
    </S.Container>
  );
};

WithCardsAndImg.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  textAfterHeading: PropTypes.string,
};

export default WithCardsAndImg;
