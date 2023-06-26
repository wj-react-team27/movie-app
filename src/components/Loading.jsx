import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingCircleContainer = styled.div`
  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: zoom-in-zoom-out 2s infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCircleContainer>L O A D I N G . . .</LoadingCircleContainer>
    </LoadingContainer>
  );
};

export default Loading;
