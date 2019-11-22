//assets
import styled from "styled-components/macro";
import { colors } from "assets/styles/utils/vars";

export const S = {};

S.Container = styled.div(({ color, width, isOpen }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  position: "relative",

  width: width + "px" || "auto",
  paddingTop: "5px",
  boxShadow: isOpen ? "2px 2px 4px 4px #a7a7a7" : "none",
  transition: "box-shadow .3s",

  "& a": { color: color || colors.white },

  span: {
    padding: "5px",
  },

  [`& ${S.Button} :last-child`]: {
    width: "18px",
  },
}));

S.Button = styled.button({
  //reset
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  ":active, :focus": {
    outline: "none",
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

S.HamburgerLine = styled.div(({ color }) => ({
  width: "30px",
  height: "2px",
  backgroundColor: color || colors.white,
  marginBottom: "5px",
}));

S.List = styled.ul(({ isOpen }) => ({
  //reset
  listStyle: "none",

  position: "absolute",
  right: "0px",
  top: "25px",

  width: "max-content",
  padding: "0",
  backgroundColor: "#a7a7a7",
  borderRadius: "5px",
  visibility: isOpen ? "visible" : "hidden",
  opacity: isOpen ? 1 : 0,
  overflow: "hidden",
  transition: "opacity .4s ease-in",

  li: {
    ":hover": {
      backgroundColor: "#9e9e9e",
    },
  },

  a: {
    padding: "10px",
    opacity: 1,

    ":hover": {
      opacity: 1,
    },
  },
}));
