//react
import React from "react";
import PropTypes from "prop-types";

const Quote = ({ className, quoteText, photo, author, company }) => (
  <figure className={className}>
    <blockquote>{quoteText}</blockquote>
    {photo && <img src={photo} alt="photo author" />}
    <figcaption>
      {author} - <span>{company}</span>
    </figcaption>
  </figure>
);

Quote.propTypes = {
  className: PropTypes.string,
  quoteText: PropTypes.string,
  photo: PropTypes.string,
  author: PropTypes.string,
  company: PropTypes.string,
};

export default Quote;
