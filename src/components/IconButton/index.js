//react
import React, { useState } from "react";
import PropTypes from "prop-types";
//components
import Arrow from "components/Arrow";
//assets
import styled from "styled-components/macro";

const S = {};

S.Container = styled.button(() => ({}));

const IconButton = ({ className }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <S.Container
      className={className}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Arrow hover={isHover} />
    </S.Container>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
};

export default IconButton;
