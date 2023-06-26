import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 46px;
    margin-bottom: 15px;
  }

  & > div > button {
    border: none;
    outline: none;
    background: none;
    padding: 10px 15px;
    border-radius: 6px;
    cursor: pointer;
    background: #fff;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <NotFoundContainer>
      <p>404 NOT FOUND</p>
      <div>
        <button onClick={() => navigate('/', { replace: true })}>
          메인으로
        </button>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;
