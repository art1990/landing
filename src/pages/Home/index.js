//react
import React, { useState } from "react";
//components
import ImageLink from "components/ImageLink";
//sections
import PageHeader from "sections/PageHeader";
import OurServices from "sections/OurServices";
import Benefits from "sections/Benefits";
import Clients from "sections/Clients";
import WithCards from "sections/WithCards";
import Testimonials from "sections/Testimonials";
import Subscribe from "sections/Subscribe";
//utils
import {
  articlesHomePage,
  quote,
  quoteHomePage,
  benefits,
  clients,
  cards,
} from "data";
//assets
import styled from "styled-components/macro";
import { headers, textMisc, colors } from "assets/styles/utils/vars";
import codepen from "assets/img/codepen.svg";
import dribbble from "assets/img/dribbble.svg";
import headerBackground from "assets/img/headerHome.png";

const S = {};

S.Heading = styled.h1({
  ...headers.h1,

  display: "flex",
  flexDirection: "column",

  span: {
    color: colors.primary,
  },
});

const imgLinkArr = new Array(6)
  .fill(0)
  .map((elem, i) => (
    <ImageLink
      key={i}
      img={[0, 3, 4].includes(i) ? codepen : dribbble}
      link="/"
    />
  ));

const Home = () => {
  const [serviceSectionPosition, setServiceSectionPosition] = useState(null);
  const title = <div style={textMisc.titleMedium}>What we do?</div>;

  const heading = (
    <S.Heading>
      We grow <span>great business</span>
    </S.Heading>
  );

  return (
    <>
      <PageHeader
        title={title}
        heading={heading}
        backgroundImage={headerBackground}
        isBackgroundLinearGradient
        hasScroll
        hasButton
        serviceSectionPosition={serviceSectionPosition}
      />
      <OurServices
        title="What we can do?"
        heading={<h3>Our services</h3>}
        articles={articlesHomePage}
        quote={quoteHomePage}
        paddingTop={170}
        setServiceSectionPosition={setServiceSectionPosition}
      />
      <Benefits
        title="Benefits"
        heading={<h3>Shaping the future</h3>}
        text={benefits.text}
        imgArr={benefits.imgArr}
      />
      <Clients
        title="What we do"
        heading={
          <h3>
            What we do more than you can <br /> imangine, belive us.
          </h3>
        }
        background={[colors.darkViolet]}
        headingSectionWithBackground={<h4>We build great business</h4>}
        sectionClientsTitle="Our clients"
        imgLinkArr={imgLinkArr}
        listArr={clients.list}
      />
      <WithCards
        title="what we do"
        heading={
          <h5>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </h5>
        }
        cards={cards}
      />
      <Testimonials quote={quote} />
      <Subscribe />
    </>
  );
};

export default Home;
