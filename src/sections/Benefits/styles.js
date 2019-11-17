//components
import Button from "components/Button";
//assets
import styled from "styled-components/macro";
import { colors, headers, text, textMisc } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div({
  maxWidth: "1175px",
  margin: "0 auto",
  display: "flex",
  paddingTop: "110px",
  color: colors.darkViolet,
});

S.TextSection = styled.div({
  flexBasis: "50%",
  paddingRight: "125px",
  ...text.regular,
  h3: {
    ...headers.h3,
  },
});

S.Title = styled.div({
  ...textMisc.titleSmall,
  color: colors.primary,
});

S.RegularBold = styled.span({
  ...text.regularBold,
  display: "inline-block",
  marginBottom: "70px",
});

S.Button = styled(Button)({
  marginTop: "50px",
});

S.PhotoSection = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexBasis: "50%",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "flex-end",
});

S.LastPhoto = styled.img({
  position: "absolute",
  bottom: "0",
  left: "0",
});
