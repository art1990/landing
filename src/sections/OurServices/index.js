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
  textBold,
  className,
  articles,
  quote,
  titleMaxWidth,
  paddingTop,
  setServiceContainerRef,
}) => {
  const { quoteText, photo, author, company } = quote ? quote[0] : {};

  const containerRef = React.createRef();

  useEffect(() => {
    setServiceContainerRef && setServiceContainerRef(containerRef.current);
  }, []);

  return (
    <S.Container
      paddingTop={paddingTop}
      ref={containerRef}
      className={className}
    >
      <S.Title
        title={title}
        heading={heading}
        textBold={textBold}
        maxWidth={titleMaxWidth}
      />
      <S.ServicesContainer>
        {articles &&
          articles.map(({ heading, article, articleHeaderColor, icon }, i) => (
            <ServiceArticle
              key={i}
              heading={heading}
              article={article}
              articleHeaderColor={articleHeaderColor}
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
  textBold: PropTypes.string,
  className: PropTypes.string,
  articles: PropTypes.array,
  quote: PropTypes.array,
  titleMaxWidth: PropTypes.string,
  paddingTop: PropTypes.number,
  setServiceContainerRef: PropTypes.func,
};

export default OurServices;
