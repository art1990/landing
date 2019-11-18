//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, headers, text } from "assets/styles/utils/vars";
import Title from "components/Title";
import TextList from "components/TextList";

const S = {};

S.Container = styled.div({
  color: colors.textHeaders,
});

S.Title = styled(Title)({
  margin: "175px auto 120px auto",
  color: colors.textHeaders,
  maxWidth: "1150px",
});

S.Item = styled.div(({ reverse }) => ({
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
}));

S.SectionWithBackround = styled.div(({ background }) => ({
  flexBasis: "38%",
  padding: "130px 100px 145px 145px",
  background: background || "transparent",
  color: colors.white,
  h4: {
    ...headers.h4,
    color: colors.primary,
  },
}));

S.TextList = styled(TextList)({
  ...text.regular,
});

S.SectionText = styled.div({
  flexBasis: "62%",
});

const BackgroundOutsideContent = ({
  title,
  heading,
  headingSectionWithBackground,
  listArr,
  itemArr,
}) => {
  return (
    <S.Container>
      <S.Title title={title} heading={heading} />
      <div>
        {itemArr.map(({ background, textSection }, i) => (
          <S.Item key={i} reverse={i % 2}>
            <S.SectionWithBackround background={background}>
              {headingSectionWithBackground}
              <S.TextList listArr={listArr} />
            </S.SectionWithBackround>
            <S.SectionText>{textSection}</S.SectionText>
          </S.Item>
        ))}
      </div>
    </S.Container>
  );
};

BackgroundOutsideContent.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  headingSectionWithBackground: PropTypes.object,
  listArr: PropTypes.array,
  itemArr: PropTypes.array,
};

export default BackgroundOutsideContent;
