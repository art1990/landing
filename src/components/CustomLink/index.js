//react
import React from "react";
import PropTypes from "prop-types";
//router
import { Link, NavLink } from "react-router-dom";
//assets
import { S } from "components/CustomLink/styles";
import phoneIcon from "assets/img/icon/phoneIcon.svg";
import phoneIconDark from "assets/img/icon/phoneIconDark.svg";
import mailIcon from "assets/img/icon/mailIcon.svg";

const CustomLink = ({
  children,
  color,
  width,
  linkStyles,
  activeLinkStyles,
  tel,
  isPhoneIconDark,
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
            src={
              tel ? (!isPhoneIconDark ? phoneIcon : phoneIconDark) : mailIcon
            }
            alt={`${tel ? "phone" : "mail"} icon`}
          />
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
  isPhoneIconDark: PropTypes.bool,
  mail: PropTypes.string,
  hasActiveClass: PropTypes.bool,
  navLink: PropTypes.bool,
};

export default CustomLink;
