//react
import React from "react";
//sections
import PageHeader from "sections/PageHeader";
import Awards from "sections/Awards";
import Subscribe from "sections/Subscribe";
import Footer from "pages/App/Footer";
//utils
import { awardsArr } from "pages/Services/utils/data";
//assets
import styled from "styled-components/macro";
import { headers, textMisc, colors } from "assets/styles/utils/vars";
import headerBackground from "pages/Services/assets/img/header.svg";
import map from "pages/Services/assets/img/map.svg";

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
      </S.WrapperWithMap>
      {/*<OurServices*/}
      {/*  title="What we can do?"*/}
      {/*  heading={<h3>Our services</h3>}*/}
      {/*  articles={articles}*/}
      {/*  quote={quote}*/}
      {/*  paddingTop={170}*/}
      {/*  setServiceSectionPosition={setServiceSectionPosition}*/}
      {/*/>*/}
      {/*<Benefits*/}
      {/*  title="Benefits"*/}
      {/*  heading={<h3>Shaping the future</h3>}*/}
      {/*  text={benefits.text}*/}
      {/*  imgArr={benefits.imgArr}*/}
      {/*/>*/}
      {/*<Clients*/}
      {/*  title="What we do"*/}
      {/*  heading={*/}
      {/*    <h3>*/}
      {/*      What we do more than you can <br /> imangine, belive us.*/}
      {/*    </h3>*/}
      {/*  }*/}
      {/*  background={[colors.darkViolet]}*/}
      {/*  headingSectionWithBackground={<h4>We build great business</h4>}*/}
      {/*  sectionClientsTitle="Our clients"*/}
      {/*  imgLinkArr={imgLinkArr}*/}
      {/*  listArr={clients.list}*/}
      {/*/>*/}
      {/*<WithCards*/}
      {/*  title="what we do"*/}
      {/*  heading={*/}
      {/*    <h5>*/}
      {/*      Apparently we had reached a great height in the atmosphere, for the*/}
      {/*      sky was a dead black, and the stars had ceased to twinkle.*/}
      {/*    </h5>*/}
      {/*  }*/}
      {/*  cards={cards}*/}
      {/*/>*/}
      {/*<Testimonials quote={quote} />*/}
      <Subscribe />
      <Footer />
    </>
  );
};

export default Services;
