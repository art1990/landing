//assets
import styled from "styled-components/macro";
import { colors, textMisc } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.button(({ rotate }) => ({
  //reset
  padding: 0,
  border: "none",
  font: "inherit",
  color: "inherit",
  background: "transparent",
  cursor: "pointer",
  ":focus": {
    outline: "none",
  },

  display: "flex",
  width: "min-content",

  transform: `rotate(${rotate}deg)`,
}));

S.TextIcon = styled(S.Container)(
  ({ isIcon }) =>
    !isIcon && {
      ...textMisc.titleSmall,

      color: colors.primary,
      height: "50px",
      padding: "0 27px",
      background:
        "linear-gradient(180deg, rgba(242, 242, 242, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",

      ":hover": {
        background:
          "linear-gradient(180deg, #F2F2F2 0%, rgba(255, 255, 255, 0) 100%)",
      },

      span: {
        marginRight: "20px",
      },

      ":active": {
        color: colors.white,
        background:
          "linear-gradient(180deg, #F2F2F2 0%, rgba(255, 255, 255, 0) 100%), #F61067",
        backgroundBlendMode: "multiply, normal",

        svg: {
          borderColor: "white",
        },
      },
    },
);
