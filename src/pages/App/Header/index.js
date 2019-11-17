//react
import React, { useState, useMemo, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
//components
import CustomLink from "components/CustomLink";
import NavigationPanel from "pages/App/components/NavigationPanel";
import Menu from "pages/App/components/Menu";
//assets
import styled from "styled-components/macro";
import { textMisc, colors } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div(({ backgroundColor }) => ({
  position: "fixed",
  zIndex: "1",
  top: "0px",
  left: "0px",
  width: "100%",
  backgroundColor: backgroundColor || "transparent",
}));

S.LinkSection = styled.div({
  display: "flex",
  width: "100%",
  maxWidth: "390px",
  justifyContent: "space-between",
});

const Header = ({
  color,
  logoColor,
  logo,
  tel,
  linkStyles,
  linkNamesArray,
}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingColor = useMemo(() => isScrolling && colors.textHeaders, [
    isScrolling,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvents);
    return () => window.removeEventListener("scroll", listenScrollEvents);
  }, []);

  const listenScrollEvents = useCallback(
    e => {
      if (window.scrollY > 10 && !isScrolling) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    },
    [setIsScrolling, isScrolling],
  );

  const createArrayOfNavLinks = useCallback(
    (hasActiveClass = false, userColor) =>
      linkNamesArray.map((elem, index) => (
        <CustomLink
          color={userColor || color}
          key={index}
          linkStyles={linkStyles}
          to={index === 0 ? "/" : `/${elem.toLowerCase()}`}
          navLink
          hasActiveClass={hasActiveClass}
        >
          {elem}
        </CustomLink>
      )),
    [linkNamesArray],
  );

  return (
    <S.Container backgroundColor={isScrolling && colors.lightGrey}>
      <NavigationPanel>
        <CustomLink
          color={(isScrolling && colors.violet) || logoColor}
          linkStyles={textMisc.logo}
          navLink
          to="/"
        >
          {logo}
        </CustomLink>
        <S.LinkSection>
          {createArrayOfNavLinks(true, scrollingColor)}
        </S.LinkSection>
        <CustomLink color={scrollingColor || color} tel={tel} />
        <Menu>{createArrayOfNavLinks()}</Menu>
      </NavigationPanel>
    </S.Container>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  logoColor: PropTypes.string,
  logo: PropTypes.string,
  tel: PropTypes.string,
  linkStyles: PropTypes.object,
  linkNamesArray: PropTypes.array,
};

export default Header;
