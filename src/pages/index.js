import React from 'react';
import SEO from '../components/seo';
import HeroSlider from '../components/organisms/HeroSlider';
import GlobalStyle from '../theme/GlobalStyle';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
    <SEO title="Site Task" />
    <GlobalStyle />
    <HeroSlider />
  </>
);

export default IndexPage;
