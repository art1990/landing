//react
import React from "react";
import PropTypes from "prop-types";
//components
import ImageLink from "components/ImageLink";
//utils
import { socialIcon } from "data";
//assets
import { S } from "sections/OurTeam/styles";

const OurTeam = ({ title, heading, headingTextBold, personArr }) => (
  <S.Container>
    <S.Title title={title} heading={heading} textBold={headingTextBold} />
    <S.PersonsContainer>
      <S.PersonContent>
        {personArr.map(
          ({ img, firstName, lastName, profession, linkArr }, i) => (
            <S.PersonInfo
              key={i}
              avatar={img}
              firstName={firstName}
              lastName={lastName}
              profession={profession}
            >
              <S.SocialLinksContainer>
                {linkArr.map(({ resourceName, link }, i) => (
                  <ImageLink
                    key={i}
                    img={socialIcon[resourceName]}
                    link={link}
                  />
                ))}
              </S.SocialLinksContainer>
            </S.PersonInfo>
          ),
        )}
      </S.PersonContent>
    </S.PersonsContainer>
  </S.Container>
);

OurTeam.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.object,
  headingTextBold: PropTypes.string,
  personArr: PropTypes.array,
};

export default OurTeam;
