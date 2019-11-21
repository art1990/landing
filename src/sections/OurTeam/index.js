//react
import React from "react";
import PropTypes from "prop-types";
//components
import Title from "components/Title";
import PersonInfo from "components/PersonInfo";
import ImageLink from "components/ImageLink";
//utils
import { socialIcon } from "pages/Team/utils/data";
//assets
import styled from "styled-components/macro";
import { colors } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  color: colors.textHeaders,
});

S.Title = styled(Title)({
  margin: "0 auto",
  padding: "180px 0 290px 0",
  maxWidth: "500px",
  textAlign: "center",
});

S.PersonsContainer = styled.div({
  backgroundColor: colors.darkViolet,
  paddingBottom: "200px",
  width: "100%",
});

S.PersonInfo = styled(PersonInfo)({
  width: "min-content",
});

S.PersonContent = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridRowGap: "110px",
  justifyItems: "center",

  maxWidth: "1050px",
  margin: "0 auto",
  transform: "translateY(-120px)",
});

S.SocialLinksContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",

  width: "100%",
  paddingTop: "20px",
});

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
              fipstName={firstName}
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
