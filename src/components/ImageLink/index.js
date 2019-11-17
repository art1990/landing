//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";

const ImageLink = ({ link, img }) => (
  <a href={link}>
    <img src={img} alt="image link" />
  </a>
);

ImageLink.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
};

export default ImageLink;
