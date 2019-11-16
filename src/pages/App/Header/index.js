//react
import React from "react";
import PropTypes from "prop-types";
//components
import CustomLink from "components/CustomLink";
import NavigationPanel from "pages/App/components/NavigationPanel";
import Menu from "pages/App/components/Menu";
//assets
import styled from "styled-components/macro";
import { textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div(() => ({
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100%",
  backgroundColor: "transparent",
}));

S.LinkSection = styled.div({
  display: "flex",
  width: "100%",
  maxWidth: "390px",
  justifyContent: "space-between",
});

const Header = ({ color, logo, tel, linkStyles, linkNamesArray }) => {
  const createArrayOfNavLinks = (hasActiveClass = false) =>
    linkNamesArray.map((elem, index) => (
      <CustomLink
        color={color}
        key={index}
        linkStyles={linkStyles}
        to={index === 0 ? "/" : `/${elem.toLowerCase()}`}
        navLink
        hasActiveClass={hasActiveClass}
      >
        {elem}
      </CustomLink>
    ));
  return (
    <S.Container>
      <NavigationPanel>
        <CustomLink color={color} linkStyles={textMisc.logo} navLink to="/">
          {logo}
        </CustomLink>
        <S.LinkSection>{createArrayOfNavLinks(true)}</S.LinkSection>
        <CustomLink color={color} tel={tel} />
        <Menu>{createArrayOfNavLinks()}</Menu>
      </NavigationPanel>
    </S.Container>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  logo: PropTypes.string,
  tel: PropTypes.string,
  linkStyles: PropTypes.object,
  linkNamesArray: PropTypes.array,
};

export default Header;
