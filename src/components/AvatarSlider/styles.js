//assets
import styled from "styled-components/macro";

export const S = {};

S.AvatarSliderContainer = styled.div(({ avatarNum }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "-125px",

  position: "relative",

  "& :last-child": {
    position: "relative",
    margin: "-8% 0 10px 0",
  },

  [`& img:not(:nth-child(${avatarNum}))`]: {
    opacity: 0,
    position: "absolute",
    transition: "opacity .5s",
  },

  img: {
    opacity: 1,
    transition: "opacity 1s",
  },
}));
