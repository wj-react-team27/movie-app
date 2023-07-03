import React from "react";
import { useSelector } from "react-redux";
import CardData from "../components/CardData";
import { Link } from "react-router-dom";
import { MainContainer } from "./MainPage";

const FavoritePage = () => {
  const { favoritMovies } = useSelector((state) => state.favoritMovieSlice);

  return (
    <MainContainer>
      {favoritMovies.map((data) => (
        <CardData
          key={data.id}
          id={data.id}
          title={data.title}
          desc={data.summary}
          img={data.img}>
          <Link to={`/detail/${data.id}`} />
        </CardData>
      ))}
    </MainContainer>
  );
};

export default FavoritePage;
