//react
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
//components
import IconButton from "components/IconButton";
import Quote from "components/Quote";
//assets
import { S } from "sections/Testimonials/styles";
import avatar from "pages/App/assets/img/avatar/defaultFemale.svg";
import avatarMale from "pages/App/assets/img/avatar/defaultMale.svg";
import av1 from "pages/App/assets/img/avatar/1.svg";
import av2 from "pages/App/assets/img/avatar/2.svg";
import av3 from "pages/App/assets/img/avatar/3.svg";
import av4 from "pages/App/assets/img/avatar/4.svg";
import av5 from "pages/App/assets/img/avatar/5.svg";
import av6 from "pages/App/assets/img/avatar/6.svg";
import av7 from "pages/App/assets/img/avatar/7.svg";
import quotes from "pages/App/assets/img/quotes.svg";
import { shadow } from "assets/styles/utils/vars";

const Testimonials = ({ quote }) => {
  const [quoteNum, setQuoteNum] = useState(1);
  const { quoteText, author, company, photo } = quote[quoteNum];

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
              <img key={i} src={photo} alt="avatar" />
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
      <S.QuoteContainer>
        <S.QuoteAndButtons>
          <IconButton
            isIcon
            rotate={180}
            onClick={() => setQuoteNum((quoteNum - 1) % 3 || 1)}
          />
          <Quote quoteText={quoteText} author={author} company={company} />
          <IconButton
            isIcon
            onClick={() => setQuoteNum((quoteNum + 1) % 3 || 1)}
          />
        </S.QuoteAndButtons>
      </S.QuoteContainer>
    </S.Container>
  );
};

Testimonials.propTypes = {
  quote: PropTypes.array,
};

export default Testimonials;
