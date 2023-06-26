import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../components/Loading';

const Wrapper = styled.div`
  margin: 50px;
`;

const Title = styled.div`
  div:nth-of-type(1) {
    margin-top: 15px;
  }
  div {
    margin-bottom: 5px;
  }
`;

const DesContainer = styled.div`
  @media (min-width: 780.1px) {
    display: flex;
  }
  @media (max-width: 780px) {
    display: block;
  }

  margin-top: 40px;
`;

const Description = styled.div`
  @media (min-width: 780.1px) {
    margin-left: 50px;
  }

  div {
    margin-bottom: 15px;
  }
  div:nth-of-type(5) {
    width: 60%;
  }
`;

const Poster = styled.img`
  width: 200px;
  height: 350px;
`;
const DetailPage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(
      (res) => {
        setLoading(false);
        setMovieData(res.data.data.movie);
      }
    );
  }, [id]);
  if (loading) return <Loading />;
  return (
    <Wrapper>
      <Title>
        <h1>{movieData.title}</h1>
        <div>제작년도 : {movieData.year}</div>
        <div>장르 : {movieData.genres[0]}</div>
      </Title>

      <DesContainer>
        <Poster src={movieData.medium_cover_image} alt={movieData.title} />

        <Description>
          <div>평점 : {movieData.rating}점</div>
          <div>좋아요 수 : {movieData.like_count}개</div>
          <div>언어 : {movieData.language}</div>
          <div>런타임 : {movieData.runtime}분</div>
          <div>줄거리 : {movieData.description_intro}</div>
        </Description>
      </DesContainer>
    </Wrapper>
  );
};
export default DetailPage;
