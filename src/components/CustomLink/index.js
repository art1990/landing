//react
import React from "react";
import PropTypes from "prop-types";
//router
import { Link, NavLink } from "react-router-dom";
//assets
import styled from "styled-components/macro";

const S = {};

S.Container = styled.div(
  ({ color, linkStyles, activeLinkStyles, hasActiveClass }) => ({
    backgroundColor: "transparent",

    a: {
      padding: "5px",
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
  }),
);

const Link = ({
  children,
  color,
  linkStyles,
  activeLinkStyles,
  tel,
  mail,
  hasActiveClass,
  navLink,
  ...rest
}) => (
  <S.Container
    color={color}
    linkStyles={linkStyles}
    activeLinkStyles={activeLinkStyles}
    hasActiveClass={hasActiveClass}
  >
    {navLink ? (
      <NavLink exact {...rest}>
        {children}
      </NavLink>
    ) : !tel && !mail ? (
      <Link {...rest}>{children}</Link>
    ) : (
      <a href={tel ? `tel:${tel}` : `mailto:${mail}`}>{tel || mail}</a>
    )}
  </S.Container>
);

Link.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  linkStyles: PropTypes.object,
  activeLinkStyles: PropTypes.object,
  tel: PropTypes.string,
  mail: PropTypes.string,
  hasActiveClass: PropTypes.bool,
  navLink: PropTypes.bool,
};

export default Link;
