//react
import React from "react";
//sections
import PageHeader from "sections/PageHeader";
import Awards from "sections/Awards";
import OurServices from "sections/OurServices";
import WithCardsAndImg from "sections/WithCardsAndImg";
import Subscribe from "sections/Subscribe";
import Testimonials from "sections/Testimonials";
import Footer from "pages/App/components/Footer";
//utils
import { awardsArr, articlesServices, quote } from "data";
//assets
import styled from "styled-components/macro";
import { S as STitle } from "components/Title/index";
import { headers, textMisc, colors } from "assets/styles/utils/vars";
import headerBackground from "assets/img/headerServices.png";
import map from "assets/img/map.svg";

const S = {};

S.Heading = styled.h2({
  ...headers.h2,

  display: "flex",
  flexDirection: "column",

  color: colors.primary,
  marginTop: 0,
});

S.WrapperWithMap = styled.div({
  backgroundImage: `url(${map})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 200px",
});

S.OurServices = styled(OurServices)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "180px 0",

  [`${STitle.Container}`]: {
    textAlign: "center",
  },
});

const Services = () => {
  const heading = (
    <div style={textMisc.titleLarge}>We build great business</div>
  );
  const title = <S.Heading>Our services</S.Heading>;

  return (
    <>
      <PageHeader
        title={title}
        heading={heading}
        padding="180px 0 125px 0"
        backgroundPosition="0 80px"
        backgroundImage={headerBackground}
      />
      <S.WrapperWithMap>
        <Awards
          title="What we do"
          heading={
            <h5>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </h5>
          }
          awardsArr={awardsArr}
        />
        <S.OurServices
          title="We are Amazing"
          heading={<h3>Our services</h3>}
          textBold="Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Quam elementum pulvinar etiam non. Eu consequat."
          titleMaxWidth="700px"
          articles={articlesServices}
        />
      </S.WrapperWithMap>
      <WithCardsAndImg
        title="what we do"
        heading={<h3>What we do</h3>}
        textAfterHeading="Upper prior hundred links approach reedy, was to the than and the ever somehow surprised known for every by of there until road, "
      />
      <Testimonials quote={quote} />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Services;
