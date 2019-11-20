//react
import React, { useState } from "react";
import PropTypes from "prop-types";
//components
import Arrow from "components/Arrow";
//assets
import { S } from "components/IconButton/styles";

const IconButton = ({
  type,
  className,
  children,
  icon,
  rotate,
  isIcon,
  isBackgroundTransparent,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <S.TextIcon
      type={type}
      className={className}
      rotate={rotate}
      isIcon={isIcon}
      onClick={onClick}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onMouseDown={e => setIsClick(true)}
      onMouseUp={e => setIsClick(false)}
    >
      {!isIcon && <span>{children}</span>}
      {icon ? (
        <img src={icon} alt="icon" />
      ) : (
        <Arrow
          isHover={isHover}
          isClick={!isIcon && isClick}
          isBackgroundTransparent={isBackgroundTransparent}
        />
      )}
    </S.TextIcon>
  );
};

IconButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.string,
  rotate: PropTypes.number,
  isIcon: PropTypes.bool,
  isBackgroundTransparent: PropTypes.bool,
  onClick: PropTypes.func,
};

export default IconButton;
