import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addMovie, delelteMovie } from "../redux/favoritMoviesSlice";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  width: 100%;
  height: 600px;
  color: #000;
  padding: 10px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  z-index: 0;

  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
`;
const MovieImg = styled.img`
  max-height: 500px;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
const MovieTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
`;
const MovieDesc = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ShortCut = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 1px;
  z-index: 2;
  font-size: 25px;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? "1" : "0.5")};

  &:hover {
    opacity: 1;
  }
`;

const CardData = ({ id, title, desc, img }) => {
  const { favoritMovies } = useSelector((state) => state.favoritMovieSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const isActive = () => {
    return favoritMovies?.reduce((acc, cur) => {
      if (acc || +cur.id === +id) return true;
      else return acc;
    }, false);
  };

  return (
    <CardContainer id={id}>
      <ShortCut
        isActive={isActive()}
        onClick={() => {
          if (isActive()) dispatch(delelteMovie({ id }));
          else dispatch(addMovie({ id, title, desc, img }));
        }}>
        ⭐️
      </ShortCut>
      <MovieImg src={img} onClick={() => handleClick(id)} />
      <MovieTitle onClick={handleClick}>{title}</MovieTitle>
      <MovieDesc>{desc}</MovieDesc>
    </CardContainer>
  );
};

export default CardData;
