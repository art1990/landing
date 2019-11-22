//assets
import styled from "styled-components/macro";
import { colors, textMisc } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div({
  backgroundColor: colors.darkViolet,
  padding: "125px 0",

  ul: {
    listStyle: "none",
    color: colors.white,
  },

  a: {
    width: "100%",
  },
});

S.Content = styled.div({
  display: "grid",
  gridRow: "1",
  gridTemplateColumns: "repeat(4, 1fr) 1.5fr",

  maxWidth: "1150px",
  margin: "0 auto",
});

S.SectionTitle = styled.span({
  ...textMisc.titleSmall,

  display: "inline-block",
  position: "relative",
  marginBottom: "35px",

  ":before": {
    content: "''",
    position: "absolute",
    left: "0",
    bottom: "-30%",
    width: "95%",
    height: "1px",
    backgroundColor: colors.primary,
  },
});

S.SocialIconContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

S.ContentInfo = styled.div({
  ...textMisc.contentInfo,

  gridColumn: "2/4",

  color: colors.white,
  width: "100%",
  textAlign: "start",
  marginTop: "45px",
  paddingLeft: "40px",
});
