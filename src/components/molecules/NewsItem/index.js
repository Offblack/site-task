import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 319px;
  background: transparent;
  background: rgba(255, 255, 255, 0);
  border-radius: 7px;
  cursor: pointer;

  :hover {
    /* Background gradients*/
    background: rgb(241, 0, 125);
    background: linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 236px;
  height: 315px;
  background-color: #fafafa;
  border-radius: 5px;
`;

const StyledParagraph = styled.p`
  position: absolute;
  bottom: 43px;
  font-size: 18px;
`;

const StyledImage = styled.img`
  padding-bottom: 55px;
`;

const NewsItem = ({ src, title }) => (
  <StyledBackground>
    <StyledWrapper>
      <StyledImage src={src} alt={title} />
      <StyledParagraph>{title}</StyledParagraph>
    </StyledWrapper>
  </StyledBackground>
);

NewsItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsItem;
