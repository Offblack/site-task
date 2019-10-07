import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 319px;
  background: transparent;
  border-radius: 7px;
  cursor: pointer;

  :hover {
    /* Background */
    background: rgba(241, 0, 125, 1);
    background: -moz-linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, rgba(241, 0, 125, 1)),
      color-stop(100%, rgba(0, 158, 226, 1))
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: -o-linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: -ms-linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1007d', endColorstr='#009ee2', GradientType=1 );
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

export default NewsItem;
