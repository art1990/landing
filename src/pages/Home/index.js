//react
import React from "react";
import PropTypes from "prop-types";
//sections
import PageHeader from "sections/PageHeader";
import OurServices from "sections/OurServices";
//utils
import { data } from "pages/Home/utils/data";
//assets
import styled from "styled-components/macro";
import header from "pages/Home/assets/img/header.svg";
import { headers, textMisc, colors } from "assets/styles/utils/vars";

const S = {};

S.Heading = styled.h1({
  ...headers.h1,
  display: "flex",
  flexDirection: "column",
  span: {
    color: colors.primary,
  },
});

const Home = () => {
  const title = <div style={textMisc.titleMedium}>What we do?</div>;

  const heading = (
    <S.Heading>
      We grow <span>great business</span>
    </S.Heading>
  );

  return (
    <>
      <PageHeader title={title} heading={heading} />
      <OurServices articles={data} />
    </>
  );
};

Home.propTypes = {};

export default Home;
