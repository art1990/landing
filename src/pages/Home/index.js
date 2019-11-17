//react
import React from "react";
import PropTypes from "prop-types";
//sections
import PageHeader from "sections/PageHeader";
import OurServices from "sections/OurServices";
import Benefits from "sections/Benefits";
//utils
import { articles, quote, benefits } from "pages/Home/utils/data";
//assets
import styled from "styled-components/macro";
import { headers, textMisc, colors } from "assets/styles/utils/vars";
import photo from "pages/Home/assets/img/photoAndrei.svg";

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
      <OurServices
        title="What we can do?"
        heading="Our services"
        articles={articles}
        quote={{ ...quote, photo }}
        paddingTop={180}
      />
      <Benefits
        title="Benefits"
        heading="Shaping the future"
        text={benefits.text}
        imgArr={benefits.imgArr}
      />
    </>
  );
};

Home.propTypes = {};

export default Home;
