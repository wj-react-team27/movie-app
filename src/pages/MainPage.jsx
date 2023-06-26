import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardData from '../components/CardData';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Pagenation from '../components/Pagenation';

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 340px);
`;

const MainPage = () => {
  const [movieDatas, setMovieDatas] = useState({});
  const [listLength, setListLength] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const limit = queryParams.get('limit');
  const page = queryParams.get('page');
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const res = await axios(
          `https://yts.mx/api/v2/list_movies.json?page=${
            page ? page : 1
          }&limit=${limit ? limit : 20}`
        );
        setMovieDatas(res.data.data.movies);
        setListLength(res.data.data.movie_count);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [limit, page]);

  if (loading) return <Loading />;

  return (
    <>
      <MainContainer>
        {movieDatas.map((data) => (
          <CardData
            key={data.id}
            id={data.id}
            title={data.title}
            desc={data.summary}
            img={data.medium_cover_image}
            hanadleClcik={() => navigate(`/detail/${data.id}`)}>
            <Link to={`/detail/${data.id}`} />
          </CardData>
        ))}
      </MainContainer>
      <Pagenation listLength={listLength} limit={limit} page={page} />
    </>
  );
};

export default MainPage;
