//react
import React from "react";
import PropTypes from "prop-types";
//assets
import styled from "styled-components/macro";

const Container = styled.a({
  ":hover": {
    boxShadow: "0 0 5px 5px rgba(255, 255, 255, 0.1)",
    transition: "all .5s",
  },
});

const ImageLink = ({ link, img }) => (
  <Container href={link}>
    <img src={img} alt="link" />
  </Container>
);

ImageLink.propTypes = {
  link: PropTypes.string,
  img: PropTypes.string,
};

export default ImageLink;
