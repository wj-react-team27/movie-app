import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardData from "../components/CardData";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MainPage = () => {
  const [movieDatas, setMovieDatas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        );
        setMovieDatas(res.data.data.movies);
        console.log(res.data.data.movies);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);

  if (loading) return <div>로딩중...</div>;

  return (
    <MainContainer>
      {movieDatas.map((data) => (
        <CardData
          key={data.id}
          id={data.id}
          title={data.title}
          desc={data.summary}
          img={data.medium_cover_image}
          genres={data.genres}
        >
          <Link to={data.id} />
        </CardData>
      ))}
    </MainContainer>
  );
};

export default MainPage;
