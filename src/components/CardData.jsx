import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 600px;
  color: #000;
  padding: 10px;
  border: 2px solid red;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MovieImg = styled.img`
  max-height: 500px;
  height: 100%;
  width: 100%;
`;
const MovieTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const MovieDesc = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardData = ({ id, title, desc, img, hanadleClcik }) => {
  return (
    <CardContainer id={id} onClick={hanadleClcik}>
      <MovieImg src={img} />
      <MovieTitle>{title}</MovieTitle>
      <MovieDesc>{desc}</MovieDesc>
    </CardContainer>
  );
};

export default CardData;
