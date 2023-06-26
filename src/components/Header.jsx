import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 300px;
  background-image: url('https://cdn.pixabay.com/photo/2016/12/28/17/54/columbus-1936633_1280.jpg');
  background-position: top center;
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);

    & > div {
      margin: 30px;

      & > a {
        font-size: 48px;
        height: 100%;
        margin: auto;
        color: #fff;

        &:hover {
          color: #efefef;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <div>
          <Link to="/">27 Movies</Link>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
