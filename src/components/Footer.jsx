import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  height: 200px;
  padding: 30px;

  & > a {
    color: #000;
  }

  & > p {
    margin-top: 5px;
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/wj-react-team27/movie-app">Github</a>
      <p>Copyright Ⓒ 2023. Team 27. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
