//react
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
//components
import IconButton from "components/IconButton";
import Quote from "components/Quote";
import AvatarSlider from "components/AvatarSlider";
//assets
import { S } from "sections/Testimonials/styles";
import { avatarArr } from "data";
import { shadow } from "assets/styles/utils/vars";

const Testimonials = ({ quote }) => {
  const [quoteNum, setQuoteNum] = useState(0);
  const { quoteText, author, company } = quote[quoteNum];

  const avatarDataArr = useMemo(() => {
    const { pink, violet, green } = shadow;
    return [
      { size: 77, shadow: pink },
      { size: 105, shadow: violet },
      { size: 64, shadow: green },
      { size: 460 },
      { size: 81, shadow: green },
      { size: 56, shadow: violet },
      { size: 92, shadow: green },
      { size: 73, shadow: pink },
    ].map((elem, i) => ({ ...elem, avatar: avatarArr[i] }));
  }, []);

  return (
    <S.Container>
      <S.AvatarsSection>
        {avatarDataArr.map(({ avatar, size, shadow }, i, arr) => {
          return i === 3 ? (
            <AvatarSlider key={i} avatarNum={quoteNum + 1} quote={quote} />
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
            onClick={() => {
              if (quoteNum === 0) return;
              setQuoteNum(quoteNum - 1);
            }}
          />
          <Quote quoteText={quoteText} author={author} company={company} />
          <IconButton
            isIcon
            onClick={() => {
              if (quoteNum + 1 === quote.length) return;
              setQuoteNum(quoteNum + 1);
            }}
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
