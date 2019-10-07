import styled from 'styled-components';

const Header = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin: 50px auto 70px;

  ::after {
    content: '';
    display: block;
    width: 37px;
    height: 2px;
    margin: 18px auto;
    /* Background gradients */
    background: rgba(241, 0, 125, 1);
    background: -moz-linear-gradient(
      left,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: -webkit-gradient(
      left top,
      right top,
      color-stop(0%, rgba(241, 0, 125, 1)),
      color-stop(100%, rgba(0, 158, 226, 1))
    );
    background: -webkit-linear-gradient(
      left,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: -o-linear-gradient(
      left,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: -ms-linear-gradient(
      left,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    background: linear-gradient(
      to right,
      rgba(241, 0, 125, 1) 0%,
      rgba(0, 158, 226, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1007d', endColorstr='#009ee2', GradientType=1 );
  }
`;

export default Header;
