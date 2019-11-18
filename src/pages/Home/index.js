//react
import React from "react";
import PropTypes from "prop-types";
//components
import ImageLink from "components/ImageLink";
//sections
import PageHeader from "sections/PageHeader";
import OurServices from "sections/OurServices";
import Benefits from "sections/Benefits";
import Clients from "sections/Clients";
import WithCards from "sections/WithCards";
//utils
import {
  articles,
  quote,
  benefits,
  clients,
  cards,
} from "pages/Home/utils/data";
//assets
import styled from "styled-components/macro";
import { headers, textMisc, colors } from "assets/styles/utils/vars";
import photo from "pages/Home/assets/img/photoAndrei.svg";
import codepen from "pages/Home/assets/img/codepen.svg";
import dribbble from "pages/Home/assets/img/dribbble.svg";

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
        heading={<h3>Our services</h3>}
        articles={articles}
        quote={{ ...quote, photo }}
        paddingTop={170}
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
    </>
  );
};

Home.propTypes = {};

export default Home;
