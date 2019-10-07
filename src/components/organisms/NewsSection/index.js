import React from 'react';
import styled from 'styled-components';
import NewsItem from '../../molecules/NewsItem';
import businessCard from '../../../images/business_card.png';
import leaflet from '../../../images/leaflet.png';
import poster from '../../../images/poster.png';
import calendar from '../../../images/calendar.png';
import folder from '../../../images/folder.png';
import stickers from '../../../images/stickers.png';
import banner from '../../../images/banner.png';
import mesh from '../../../images/mesh.png';
import Header from '../../atoms/Header';

const StyledWrapper = styled.div`
  margin: 0px auto 100px;
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-gap: 50px;

  @media (max-width: 1140px) and (min-width: 540px) {
    grid-template-columns: repeat(2, 240px);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 240px);
  }
`;

const NewsSection = () => (
  <>
    <Header>Nowości</Header>
    <StyledWrapper>
      <NewsItem src={businessCard} title="Wizytówki" />
      <NewsItem src={leaflet} title="Ulotki" />
      <NewsItem src={poster} title="Plakaty" />
      <NewsItem src={calendar} title="Kalendarze" />
      <NewsItem src={folder} title="Teczki" />
      <NewsItem src={stickers} title="Naklejki" />
      <NewsItem src={banner} title="Banner" />
      <NewsItem src={mesh} title="Siatka mesh" />
    </StyledWrapper>
  </>
);

export default NewsSection;
