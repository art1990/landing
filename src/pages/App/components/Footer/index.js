//react
import React from "react";
import PropTypes from "prop-types";
//components
import CustomLink from "components/CustomLink";
//assets
import { S } from "pages/App/components/Footer/styles";
import { textMisc } from "assets/styles/utils/vars";
import ImageLink from "components/ImageLink";

const Footer = ({ footerData }) => (
  <S.Container>
    <S.Content>
      <CustomLink linkStyles={textMisc.logo} to="/">
        Lopper
      </CustomLink>
      {["menu", "services"].map((elem, i) => (
        <ul key={i}>
          <S.SectionTitle key={"span" + i}>{elem}</S.SectionTitle>
          {footerData[i][elem].map((listElem, i) => (
            <li key={i}>
              <CustomLink
                to={listElem === "Home" ? "/" : "/" + listElem}
                linkStyles={textMisc.navFooter}
              >
                {listElem}
              </CustomLink>
            </li>
          ))}
        </ul>
      ))}
      <ul>
        <S.SectionTitle>Contact us</S.SectionTitle>
        <CustomLink mail={footerData[2]["contact us"][0]} />
        <CustomLink
          tel={footerData[2]["contact us"][1]}
          linkStyles={{ img: { height: "50%", marginRight: "20px" } }}
        />
      </ul>
      <ul>
        <S.SectionTitle>Follow us</S.SectionTitle>
        <S.SocialIconContainer>
          {footerData[3]["follow us"].map((elem, i) => (
            <li key={i}>
              <ImageLink img={elem[0]} link={elem[1]} />
            </li>
          ))}
        </S.SocialIconContainer>
      </ul>
      <S.ContentInfo>
        <p>© 2019 Lopper by mariuszdaniel. All right reserved.</p>
      </S.ContentInfo>
    </S.Content>
  </S.Container>
);

Footer.propTypes = {
  footerData: PropTypes.array,
};

export default Footer;
