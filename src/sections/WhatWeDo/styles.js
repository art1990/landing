//components
import Title from "components/Title";
import TextList from "components/TextList";
//assets
import styled from "styled-components/macro";
import { colors, headers, text, textMisc } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div({
  color: colors.textHeaders,
});

S.Title = styled(Title)({
  margin: "0 0 120px 0",
  color: colors.textHeaders,
});

S.Wrapper = styled.div({
  display: "flex",
});

S.SectionList = styled.div({
  flexBasis: "45%",
  padding: "130px 100px 145px 145px",
  backgroundColor: colors.darkViolet,
  color: colors.white,
  h4: {
    ...headers.h4,
    color: colors.primary,
  },
});

S.TextList = styled(TextList)({
  ...text.regular,
});

S.SectionClients = styled.div({
  flexBasis: "55%",
  paddingTop: "40px",
  marginLeft: "125px",
});

S.SectionClientsTitle = styled.div({
  ...textMisc.titleSmall,
  marginBottom: "80px",
});

S.SectionClientsLinks = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "95px 100px",
});
