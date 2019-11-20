//components
import IconButton from "components/IconButton";
//assets
import styled from "styled-components/macro";
import { colors, text } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div(
  ({
    backgroundImage,
    backgroundPosition,
    isBackgroundLinearGradient,
    padding,
  }) => ({
    color: colors.white,

    backgroundColor: "#5E239D",
    backgroundImage: `url(${backgroundImage})${
      isBackgroundLinearGradient
        ? ", linear-gradient(90deg, #5E239D 0%, rgba(196, 196, 196, 0) 56.77%)"
        : ""
    }`,
    backgroundPosition,
    backgroundBlendMode: "multiply",

    gridTemplateRows: "30% 40% 10% 20%",
    gridTemplateColumns: "30% 40% 10% 20%",
    padding: padding || "200px 0 125px 0",
  }),
);

S.Section = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1150px",
  margin: "0 auto",
}));

S.HeadlineContainer = styled.div(() => ({
  maxWidth: "70%",
}));

S.ScrollContainer = styled(IconButton)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "auto",
  padding: "0",
  background: "none",

  span: {
    writingMode: "tb-rl",
    margin: "0",
    color: colors.white,
    lineHeight: "10px",
  },

  img: {
    marginTop: "25px",
  },

  ":active": {
    borderRadius: "0 0 10px 10px",
  },
});

S.ButtonContainer = styled.div({
  ...text.regular,

  display: "flex",

  padding: "30px 40px 30px 150px",
  marginTop: "70px",
  width: "fit-content",
  border: "1px solid rgba(255, 255, 255, 0.25)",
  boxSizing: "border-box",

  span: {
    marginRight: "45px",
  },
});
