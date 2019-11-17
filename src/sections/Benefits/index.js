//react
import React from "react";
import PropTypes from "prop-types";
//assets
import { S } from "sections/Benefits/styles";

const Benefits = ({ title, heading, text = {}, imgArr }) => {
  const { regularBold, regular } = text;

  return (
    <S.Container>
      <S.TextSection>
        <S.Title>{title}</S.Title>
        <h3>{heading}</h3>
        <S.RegularBold>{regularBold}</S.RegularBold>
        <div>
          {regular &&
            regular.map((elem, i, arr) => (
              <React.Fragment key={`container${i}`}>
                <p style={{}} key={i}>
                  {elem}
                </p>
                {i + 1 !== arr.length && <p key={`empty${i}`} />}
              </React.Fragment>
            ))}
        </div>
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
  heading: PropTypes.string,
  text: PropTypes.object,
  imgArr: PropTypes.array,
};

export default Benefits;
