//components
import Button from "components/Button";
import Title from "components/Title";
//assets
import styled from "styled-components/macro";
import { colors, text } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div({
  maxWidth: "1150px",
  margin: "0 auto",
  display: "flex",
  paddingTop: "110px",
  color: colors.darkViolet,
});

S.TextSection = styled.div({
  flexBasis: "50%",
  paddingRight: "125px",
  ...text.regular,
});

S.Title = styled(Title)({
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
