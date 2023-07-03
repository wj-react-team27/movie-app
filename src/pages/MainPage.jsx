import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardData from "../components/CardData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Pagenation from "../components/Pagenation";

export const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 340px);
  margin-top: 30px;
  min-height: 50vh;
`;

const MainPage = () => {
  const [movieDatas, setMovieDatas] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const limit = queryParams.get("limit");
  const page = queryParams.get("page");
  const navigate = useNavigate();

  useEffect(() => {
    if (limit === null && page === null) {
      navigate("/?page=1&limit=20");
    }
    if (limit !== null && page < 1) {
      navigate(`/?page=1&limit=${limit}`);
    }

    const getMovies = async () => {
      try {
        setLoading(true);

        const res = await axios(
          `https://yts.mx/api/v2/list_movies.json?page=${
            page ? page : 1
          }&limit=${limit ? limit : 20}`
        );
        setMovieDatas({
          movieList: res.data.data.movies,
          listLength: res.data.data.movie_count,
        });

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [limit, page, navigate]);

  if (loading) return <Loading />;

  return (
    <>
      <MainContainer>
        {movieDatas.movieList.map((data) => (
          <CardData
            key={data.id}
            id={data.id}
            title={data.title}
            desc={data.summary}
            img={data.medium_cover_image}>
            <Link to={`/detail/${data.id}`} />
          </CardData>
        ))}
      </MainContainer>
      <Pagenation
        listLength={movieDatas.listLength}
        limit={limit}
        page={page}
      />
    </>
  );
};

export default MainPage;
