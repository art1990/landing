//components
import Title from "components/Title";
import Quote from "components/Quote";
//assets
import styled from "styled-components/macro";
import { colors, quote, text } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div(({ paddingTop }) => ({
  paddingTop: paddingTop + "px",
  maxWidth: "1150px",
  margin: "0 auto",
  color: colors.textHeaders,
}));

S.ServicesContainer = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 26%)",
  gridColumnGap: "100px",
  gridRowGap: "65px",
  alignItems: "start",
});

S.Title = styled(Title)({
  marginBottom: "55px",
});

S.QuoteContainer = styled(Quote)({
  position: "relative",
  zIndex: "0",
  margin: "120px 0 0 0",
  display: "flex",
  flexDirection: "column",

  blockquote: {
    ...quote.small,

    margin: "0",
    padding: "75px 200px 75px 100px",
    maxWidth: "715px",
    color: colors.white,
    backgroundColor: colors.lightPurple,
  },

  img: {
    position: "absolute",
    right: 0,
    top: "-45%",
  },

  figcaption: {
    ...text.regularBold,

    color: colors.primary,
    padding: "55px 0 0 100px",

    span: {
      ...text.regular,

      color: colors.textHeaders,
    },
  },
});
