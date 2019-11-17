//react
import React from "react";
import PropTypes from "prop-types";
//components
import TextList from "components/TextList";
//assets
import { S } from "sections/Benefits/styles";

const Benefits = ({ title, heading, text = {}, imgArr }) => {
  const { regularBold, list } = text;

  return (
    <S.Container>
      <S.TextSection>
        <S.Title title={title} heading={heading} text={regularBold} />
        <TextList listArr={list} />
        <S.Button>learn more</S.Button>
      </S.TextSection>
      <S.PhotoSection>
        <img src={imgArr[0]} alt="photo home" />
        <S.LastPhoto src={imgArr[1]} alt="photo apartament" />
      </S.PhotoSection>
    </S.Container>
  );
};

Benefits.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  text: PropTypes.object,
  imgArr: PropTypes.array,
};

export default Benefits;
