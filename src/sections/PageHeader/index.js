//react
import React, { useCallback } from "react";
import PropTypes from "prop-types";
//components
import IconButton from "components/IconButton";
//assets
import arrow from "assets/img/icon/arrowDown.svg";
import { S } from "sections/PageHeader/styles";

const PageHeader = ({
  title,
  heading,
  padding,
  backgroundImage,
  backgroundPosition,
  scroll,
  button,
  isBackgroundLinearGradient,
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
          {scroll && (
            <S.ScrollContainer icon={arrow} onClick={scrollDown}>
              {scroll}
            </S.ScrollContainer>
          )}
        </S.Section>
        {button && (
          <S.ButtonContainer>
            <span>{button}</span>
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
  scroll: PropTypes.string,
  button: PropTypes.string,
  isBackgroundLinearGradient: PropTypes.bool,
  serviceSectionPosition: PropTypes.object,
};

export default PageHeader;
