//react
import React, { useEffect } from "react";
import PropTypes from "prop-types";
//components
import ServiceArticle from "pages/App/components/ServiceArticle";
//assets
import { S } from "sections/OurServices/styles";

const OurServices = ({
  title,
  heading,
  articles,
  quote = {},
  paddingTop,
  setServiceSectionPosition,
}) => {
  let position;
  const { quoteText, photo, author, company } = quote[0];

  const getRef = e => e && (position = e.getBoundingClientRect());

  useEffect(() => {
    setServiceSectionPosition(position);
  }, [position, setServiceSectionPosition]);

  return (
    <S.Container paddingTop={paddingTop} ref={getRef}>
      <S.Title title={title} heading={heading} />
      {/*<S.Text></S.Text>*/}
      <S.ServicesContainer>
        {articles.map(({ heading, article, icon }, i) => (
          <ServiceArticle
            key={i}
            heading={heading}
            article={article}
            icon={icon}
          />
        ))}
      </S.ServicesContainer>
      {quote && (
        <S.QuoteContainer
          quoteText={quoteText}
          photo={photo}
          author={author}
          company={company}
        />
      )}
    </S.Container>
  );
};

OurServices.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  articles: PropTypes.array,
  quote: PropTypes.array,
  paddingTop: PropTypes.number,
  setServiceSectionPosition: PropTypes.func,
};

export default OurServices;
