//react
import React, { useMemo } from "react";
import PropTypes from "prop-types";
//components
import IconButton from "components/IconButton";
//assets
import styled from "styled-components/macro";
import avatar from "pages/App/assets/img/avatar/defaultFemale.svg";
import av1 from "pages/App/assets/img/avatar/1.svg";
import av2 from "pages/App/assets/img/avatar/2.svg";
import av3 from "pages/App/assets/img/avatar/3.svg";
import av4 from "pages/App/assets/img/avatar/4.svg";
import av5 from "pages/App/assets/img/avatar/5.svg";
import av6 from "pages/App/assets/img/avatar/6.svg";
import av7 from "pages/App/assets/img/avatar/7.svg";
import quotes from "pages/App/assets/img/quotes.svg";
import { shadow } from "assets/styles/utils/vars";

const S = {};

S.Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

S.AvatarsSection = styled.div({
  position: "relative",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr) min-content repeat(3, 1fr)",
  justifyItems: "center",

  img: {
    borderRadius: "50%",
    overflow: "hidden",
  },

  "& > img:nth-child(1)": {
    alignSelf: "end",
    transform: "translateX(65px)",
  },

  "& > img:nth-child(2)": {
    marginTop: "105px",
    transform: "translateX(50px)",
  },

  "& > img:nth-child(3)": {
    marginTop: "240px",
    transform: "translateX(30px)",
  },

  "& > img:nth-child(5)": {
    marginTop: "235px",
    transform: "translateX(5px)",
  },

  "& > img:nth-child(6)": {
    marginTop: "155px",
    transform: "translateX(-35px)",
  },
});

S.LastColumn = styled.div({
  display: "table-column",
  textAlign: "center",
  transform: "translateX(-30px)",

  "& :first-child": {
    margin: "40px 0 125px 0",
  },
});

S.GeneralAvatar = styled.div({
  display: "flex",
  flexDirection: "column",

  "& :last-child": {
    position: "relative",
    margin: "-8% 0 10px 0",
  },
});

const Testimonials = () => {
  const avatarArr = useMemo(
    () => [
      { avatar: av1, size: 77, shadow: shadow.pink },
      { avatar: av2, size: 105, shadow: shadow.violet },
      { avatar: av3, size: 64, shadow: shadow.green },
      { avatar, size: 460 },
      { avatar: av4, size: 81, shadow: shadow.green },
      { avatar: av5, size: 56, shadow: shadow.violet },
      { avatar: av6, size: 92, shadow: shadow.green },
      { avatar: av7, size: 73, shadow: shadow.pink },
    ],
    [],
  );

  return (
    <S.Container>
      <S.AvatarsSection>
        {avatarArr.map(({ avatar, size, shadow }, i, arr) => {
          return i === 3 ? (
            <S.GeneralAvatar key={"general" + i}>
              <img key={i} src={avatar} alt="avatar" />
              <img key={"span" + i} src={quotes} alt="quotes" />
            </S.GeneralAvatar>
          ) : i === 6 ? (
            <S.LastColumn key={"container" + i}>
              <img key={i} src={avatar} style={shadow} alt="avatar" />
              <img
                key={"avatar" + i}
                src={arr[i + 1].avatar}
                style={arr[i + 1].shadow}
                alt="avatar"
              />
            </S.LastColumn>
          ) : i === arr.length - 1 ? null : (
            <img key={i} src={avatar} style={shadow} alt="avatar" />
          );
        })}
      </S.AvatarsSection>
      <IconButton />
    </S.Container>
  );
};

Testimonials.propTypes = {};

export default Testimonials;
