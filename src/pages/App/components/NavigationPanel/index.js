//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";

const S = {};

S.Container = styled.nav(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "padding-box",
  maxWidth: "1175px",
  margin: "0 auto",
}));

const NavigationPanel = ({ width, children }) => (
  <S.Container width={width}>
    {(Array.isArray(children) ? children : [children]).map(link => link)}
  </S.Container>
);

NavigationPanel.propTypes = {
  width: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default NavigationPanel;
