import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default MainTemplate;
