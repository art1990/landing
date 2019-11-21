//components
import Title from "components/Title";
import PersonInfo from "components/PersonInfo";
//assets
import styled from "styled-components/macro";
import { colors } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div({
  color: colors.textHeaders,
});

S.Title = styled(Title)({
  margin: "0 auto",
  padding: "180px 0 290px 0",
  maxWidth: "500px",
  textAlign: "center",
});

S.PersonsContainer = styled.div({
  backgroundColor: colors.darkViolet,
  paddingBottom: "180px",
  width: "100%",
});

S.PersonInfo = styled(PersonInfo)({
  width: "min-content",
});

S.PersonContent = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridRowGap: "110px",
  justifyItems: "center",

  maxWidth: "1050px",
  margin: "0 auto",
  transform: "translateY(-120px)",
});

S.SocialLinksContainer = styled.div({
  display: "flex",
  justifyContent: "space-around",

  width: "60%",
  paddingTop: "20px",
});
