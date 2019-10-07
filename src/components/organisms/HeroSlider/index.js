import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import bigBaner from '../../../images/baner_1.png';
import smallBaner from '../../../images/baner_small_1.png';

const StyledWrapper = styled.div`
  width: 100%;
`;

const OneSlide = styled.div`
  background: ${({ bigSrc }) => `url(${bigSrc}) no-repeat center`};
  background-size: cover;
  height: 500px;
  overflow: hidden;

  @media (max-width: 540px) {
    background: ${({ smallSrc }) => `url(${smallSrc}) no-repeat center`};
    play: none;
  }

  @media (max-width: 1140px) and (min-width: 540px) {
    height: 350px;
  }
`;

const HeroSlider = () => (
  <StyledWrapper>
    <Slider speed={500} slidesToShow={1} slidesToScroll={1} infinite={true}>
      <OneSlide bigSrc={bigBaner} smallSrc={smallBaner} />
    </Slider>
  </StyledWrapper>
);

export default HeroSlider;
