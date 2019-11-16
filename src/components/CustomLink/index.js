//react
import React from "react";
import PropTypes from "prop-types";
//router
import { Link, NavLink } from "react-router-dom";
//assets
import { S } from "components/CustomLink/styles";
import phoneIcon from "assets/img/phoneIcon.svg";

const CustomLink = ({
  children,
  color,
  width,
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
    width={width}
    linkStyles={linkStyles}
    icon={tel || mail}
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
      <>
        <a href={tel ? `tel:${tel}` : `mailto:${mail}`}>
          <img
            src={tel ? phoneIcon : phoneIcon}
            alt={`${tel ? "phone" : "mail"} icon`}
          />{" "}
          {tel || mail}
        </a>
      </>
    )}
  </S.Container>
);

CustomLink.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  linkStyles: PropTypes.object,
  activeLinkStyles: PropTypes.object,
  tel: PropTypes.string,
  mail: PropTypes.string,
  hasActiveClass: PropTypes.bool,
  navLink: PropTypes.bool,
};

export default CustomLink;
