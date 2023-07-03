import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import useFetchMovies from "../hooks/useFetchMovies";
import { ShortCut } from "../components/CardData";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, delelteMovie } from "../redux/favoritMoviesSlice";

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

const Btn = styled.button`
  padding: 2px;
  border: none;
  background-color: white;
  color: grey;
  font-size: 13px;
`;

const ShortCutDetail = styled(ShortCut)`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  width: 27px;
`;

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { favoritMovies } = useSelector((state) => state.favoritMovieSlice);
  const [showMore, setShowMore] = useState(false);
  const { movieData, loading, error } = useFetchMovies(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
  );
  const isActive = () => {
    return favoritMovies?.reduce((acc, cur) => {
      if (acc || +cur.id === +id) return true;
      else return acc;
    }, false);
  };

  if (loading) return <Loading />;
  if (error) console.log(error);

  return (
    <Wrapper>
      <Title>
        <h1>{movieData.title}</h1>
        <div>제작년도 : {movieData.year}</div>
        <div>장르 : {movieData.genres[0]}</div>
      </Title>

      <DesContainer>
        <Poster src={movieData.medium_cover_image} alt={movieData.title} />
        <ShortCutDetail
          isActive={isActive()}
          onClick={() => {
            if (isActive()) dispatch(delelteMovie({ id: +id }));
            else
              dispatch(
                addMovie({
                  id,
                  title: movieData.title,
                  desc: movieData.description_intro,
                  img: movieData.medium_cover_image,
                })
              );
          }}>
          ⭐️
        </ShortCutDetail>
        <Description>
          <div>평점 : {movieData.rating}점</div>
          <div>좋아요 수 : {movieData.like_count}개</div>
          <div>언어 : {movieData.language}</div>
          <div>런타임 : {movieData.runtime}분</div>
          <div>
            줄거리 :{" "}
            {showMore
              ? movieData.description_intro
              : `${movieData.description_intro.substring(0, 500)}`}
            {movieData.description_intro.length > 501 && (
              <Btn onClick={() => setShowMore(!showMore)}>
                {showMore ? "줄이기 ▲	" : "더보기 ▼ "}
              </Btn>
            )}
          </div>
        </Description>
      </DesContainer>
    </Wrapper>
  );
};
export default DetailPage;
