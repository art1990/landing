//react
import React from "react";
import PropTypes from "prop-types";
//assets
import { S } from "components/AvatarSlider/styles";
import quotes from "assets/img/icon/quotes.svg";

const AvatarSlider = ({ quote, avatarNum }) => (
  <S.AvatarSliderContainer avatarNum={avatarNum}>
    {quote &&
      quote.map((elem, i) => {
        return <img key={i} src={elem.photo} alt="avatar" />;
      })}
    <img src={quotes} alt="quotes" />
  </S.AvatarSliderContainer>
);

AvatarSlider.propTypes = {
  quote: PropTypes.array,
  avatarNum: PropTypes.number,
};

export default AvatarSlider;
