//react
import React, { useCallback } from "react";
import PropTypes from "prop-types";
//components
import IconButton from "components/IconButton";
//assets
import arrow from "assets/img/arrowDown.svg";
import { S } from "sections/PageHeader/styles";

const PageHeader = ({
  title,
  heading,
  padding,
  backgroundImage,
  backgroundPosition,
  isBackgroundLinearGradient,
  hasScroll,
  hasButton,
  serviceSectionPosition,
}) => {
  const scrollDown = useCallback(() => {
    serviceSectionPosition &&
      window.scrollTo({ top: serviceSectionPosition.top, behavior: "smooth" });
  }, [serviceSectionPosition]);

  return (
    <S.Container
      padding={padding}
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      isBackgroundLinearGradient={isBackgroundLinearGradient}
    >
      <div>
        <S.Section>
          <S.HeadlineContainer>
            {title}
            {heading}
          </S.HeadlineContainer>
          {hasScroll && (
            <S.ScrollContainer icon={arrow} onClick={scrollDown}>
              Scroll to see more
            </S.ScrollContainer>
          )}
        </S.Section>
        {hasButton && (
          <S.ButtonContainer>
            <span>
              Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
            </span>
            <IconButton isIcon isBackgroundTransparent />
          </S.ButtonContainer>
        )}
      </div>
    </S.Container>
  );
};

PageHeader.propTypes = {
  title: PropTypes.element,
  heading: PropTypes.element,
  padding: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
  isBackgroundLinearGradient: PropTypes.bool,
  hasScroll: PropTypes.bool,
  hasButton: PropTypes.bool,
  serviceSectionPosition: PropTypes.object,
};

export default PageHeader;
