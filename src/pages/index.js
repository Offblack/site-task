import React from 'react';
import SEO from '../components/seo';
import HeroSlider from '../components/organisms/HeroSlider';
import GlobalStyle from '../theme/GlobalStyle';

const IndexPage = () => (
  <>
    <SEO title="Site Task" />
    <GlobalStyle />
    <HeroSlider />
  </>
);

export default IndexPage;
