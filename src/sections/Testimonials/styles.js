//react
import styled from "styled-components/macro";
import { colors, quote, text } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "135px",

  button: {
    height: "fit-content",
  },
});

S.AvatarsSection = styled.div({
  position: "relative",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr) min-content repeat(3, 1fr)",
  justifyItems: "center",

  img: {
    borderRadius: "50%",
    overflow: "hidden",
  },

  "& > img:nth-child(1)": {
    alignSelf: "end",
    transform: "translateX(65px)",
  },

  "& > img:nth-child(2)": {
    marginTop: "105px",
    transform: "translateX(50px)",
  },

  "& > img:nth-child(3)": {
    marginTop: "240px",
    transform: "translateX(30px)",
  },

  "& > img:nth-child(5)": {
    marginTop: "235px",
    transform: "translateX(5px)",
  },

  "& > img:nth-child(6)": {
    marginTop: "155px",
    transform: "translateX(-35px)",
  },
});

S.LastColumn = styled.div({
  display: "table-column",
  textAlign: "center",
  transform: "translateX(-30px)",

  "& :first-child": {
    margin: "40px 0 125px 0",
  },
});

S.GeneralAvatar = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "-125px",

  "& :last-child": {
    position: "relative",
    margin: "-8% 0 10px 0",
  },
});

S.QuoteContainer = styled.div({
  display: "flex",
  maxWidth: "1150px",
  margin: "90px auto 0 auto",
  textAlign: "center",
});

S.QuoteAndButtons = styled.div({
  blockquote: {
    ...quote.large,

    color: colors.textHeaders,

    width: "65%",
    margin: "0 auto",
  },

  figcaption: {
    transform: "translateY(30px)",

    ...text.regularBold,

    color: colors.primary,

    span: {
      ...text.regular,

      color: colors.textHeaders,
    },
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
