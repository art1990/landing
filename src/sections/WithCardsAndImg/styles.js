//components
import Card from "components/Card";
import BackgroundOutsideContent from "pages/App/components/BackgroundOutcsideContent";
//assets
import styled from "styled-components/macro";
import { colors, text } from "assets/styles/utils/vars";
import { S as STitle } from "components/Title";
import { S as SBackgroundOutsideContent } from "pages/App/components/BackgroundOutcsideContent/index";

export const S = {};

S.Container = styled.div({
  color: colors.textHeaders,
});

S.BackgroundOutsideContent = styled(BackgroundOutsideContent)(
  ({ isReverse }) => ({
    paddingTop: 0,

    [`& > ${STitle.Container}`]: {
      margin: "0 auto 110px auto",

      textAlign: "center",
      maxWidth: "500px",
    },

    [`${S.Card}`]: {
      padding: isReverse
        ? "100px 147px 100px 125px"
        : "100px 125px 100px 147px",
    },

    [`${SBackgroundOutsideContent.Item}:last-child`]: {
      margin: "110px 0 305px 0",
    },
  }),
);

S.Card = styled(Card)({
  h5: {
    maxWidth: "90%",
  },

  p: {
    ...text.regular,

    marginTop: "20px",
    color: colors.textMain,
  },
});
