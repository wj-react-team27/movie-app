import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardData from "../components/CardData";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 340px);
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
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, []);
  const navigate = useNavigate();
  if (loading) return <Loading />;

  return (
    <MainContainer>
      {movieDatas.map((data) => (
        <CardData
          key={data.id}
          id={data.id}
          title={data.title}
          desc={data.summary}
          img={data.medium_cover_image}
          hanadleClcik={() => navigate(`/detail/${data.id}`)}
        >
          <Link to={`/detail/${data.id}`} />
        </CardData>
      ))}
    </MainContainer>
  );
};

export default MainPage;
