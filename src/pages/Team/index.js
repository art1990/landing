//react
import React from "react";
//sections
import PageHeader from "sections/PageHeader";
import OurTeam from "sections/OurTeam";
import Subscribe from "sections/Subscribe";
import Testimonials from "sections/Testimonials";
import Footer from "pages/App/components/Footer";
//utils
import { personArr } from "data";
//assets
import styled from "styled-components/macro";
import { headers, textMisc, colors } from "assets/styles/utils/vars";
import headerBackground from "assets/img/headerOurTeam.png";
import { quote } from "data";

const S = {};

S.Heading = styled.h2({
  ...headers.h2,

  display: "flex",
  flexDirection: "column",

  color: colors.primary,
  marginTop: 0,
});

const Team = () => {
  const heading = (
    <div style={textMisc.titleLarge}>We build great business</div>
  );
  const title = <S.Heading>Our team</S.Heading>;

  return (
    <>
      <PageHeader
        title={title}
        heading={heading}
        padding="180px 0 125px 0"
        backgroundPosition="0 80px"
        backgroundImage={headerBackground}
      />
      <OurTeam
        title="WE are"
        heading={<h3>Our team</h3>}
        headingTextBold="Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, "
        personArr={personArr}
      />
      <Testimonials quote={quote} />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Team;
