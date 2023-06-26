import styled from "styled-components";

const Header = () => {
  const Title = styled.h1`
    color: yellow;

    text-align: center;
    padding: 20px;
    background-color: black;
  `;

  return (
    <div>
      <Title>27팀 Movie APP</Title>
    </div>
  );
};

export default Header;
