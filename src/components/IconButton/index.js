//react
import React, { useState } from "react";
import PropTypes from "prop-types";
//components
import Arrow from "components/Arrow";
//assets
import styled from "styled-components/macro";
import { colors, textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.button(({ rotate }) => ({
  //reset
  padding: 0,
  border: "none",
  font: "inherit",
  color: "inherit",
  backgroundColor: "transparent",
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

const IconButton = ({ className, children, icon, rotate, isIcon, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <S.TextIcon
      className={className}
      rotate={rotate}
      isIcon={isIcon}
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onMouseDown={() => setIsClick(true)}
      onMouseUp={() => setIsClick(false)}
    >
      {!isIcon && <span>{children}</span>}
      {icon ? (
        <img src={icon} alt="icon" />
      ) : (
        <Arrow isHover={isHover} isClick={!isIcon && isClick} />
      )}
    </S.TextIcon>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.string,
  rotate: PropTypes.number,
  isIcon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default IconButton;
