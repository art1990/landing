//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";
import { colors, text, textMisc } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  img: {
    marginBottom: "20px",
  },
});

S.Name = styled.div({
  ...text.largeBold,

  display: "flex",

  color: colors.white,
});

S.Profession = styled.span({
  ...textMisc.titleSmall,

  color: colors.white,
  opacity: 0.5,
});

const PersonInfo = ({
  className,
  avatar,
  firstName,
  lastName,
  profession,
  children,
}) => (
  <S.Container className={className}>
    <img src={avatar} alt="avatar" />
    <S.Name>
      {firstName}
      {lastName}
    </S.Name>
    <S.Profession>{profession}</S.Profession>
    {children}
  </S.Container>
);

PersonInfo.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default PersonInfo;
