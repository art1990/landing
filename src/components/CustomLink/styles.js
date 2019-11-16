//assets
import styled from "styled-components/macro";

export const S = {};

S.Container = styled.div(
  ({ color, width, linkStyles, activeLinkStyles, icon, hasActiveClass }) => {
    const linkStylesWithIcon = icon
      ? {
          display: "flex",
          justifyContent: "space-between",
          "& a": {
            display: "flex",
            alignItems: "center",
          },
          "& img": {
            marginRight: "15px",
            fill: color,
          },
        }
      : {};
    return {
      ...linkStylesWithIcon,
      width: width ? "100%" : "auto",
      maxWidth: width + "px" || "auto",
      backgroundColor: "transparent",

      a: {
        padding: "5px 0 5px 0",
        position: "relative",
        color: color || "white",
        textDecoration: "none",
        ...linkStyles,
      },

      "& a.active": hasActiveClass && {
        ...activeLinkStyles,
        "::before": {
          content: "''",
          width: "60%",
          height: "2px",
          backgroundColor: color || "white",
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
    };
  },
);
