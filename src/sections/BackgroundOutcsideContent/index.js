//react
import React from "react";
import PropTypes from "prop-types";
//assets
import { whatWeDo } from "pages/Home/utils/data";
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

S.Wrapper = styled.div({
  display: "flex",
});

S.SectionWithBackround = styled.div(({ background }) => ({
  flexBasis: "43%",
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
  flexBasis: "57%",
  paddingTop: "40px",
  marginLeft: "125px",
});

const BackgroundOutsideContent = ({
  title,
  heading,
  background,
  headingSectionWithBackground,
  children,
}) => (
  <S.Container>
    <S.Title title={title} heading={heading} />
    <S.Wrapper>
      <S.SectionWithBackround background={background}>
        {headingSectionWithBackground}
        <S.TextList listArr={whatWeDo.list} />
      </S.SectionWithBackround>
      <S.SectionText>{children}</S.SectionText>
    </S.Wrapper>
  </S.Container>
);

BackgroundOutsideContent.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  background: PropTypes.string,
  headingSectionWithBackground: PropTypes.object,
  children: PropTypes.element,
};

export default BackgroundOutsideContent;
