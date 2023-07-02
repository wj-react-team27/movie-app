import { useNavigate } from 'react-router-dom';
import PagenationBtn from './PagenationBtn';
import styled from 'styled-components';
import { useState } from 'react';

const PagenationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;
`;

const Pagenation = ({ listLength, limit, page }) => {
  const [currentLimit, setCurrentLimit] = useState(limit);
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`/?page=${page}&limit=${limit}`);
  };

  const handleSelectChange = (event) => {
    setCurrentLimit(event.target.value);
    navigate(`/?page=1&limit=${event.target.value}`);
  };

  return (
    <>
      <PagenationContainer>
        <PagenationBtn
          name={'이전페이지'}
          isHide={page === '1'}
          handleClick={() => handleClick(--page)}
        />
        <PagenationBtn
          name={'1'}
          isHide={page === '1'}
          handleClick={() => handleClick(1)}
        />
        <PagenationBtn
          name={page}
          currentPage={true}
          isHide={false}
          handleClick={() => handleClick(page)}
        />
        <PagenationBtn
          name={Math.floor(listLength / limit) + 1}
          isHide={+page === Math.floor(listLength / limit) + 1}
          handleClick={() => handleClick(Math.floor(listLength / limit) + 1)}
        />
        <PagenationBtn
          name={'다음페이지'}
          currentLimit={limit}
          isHide={+page === Math.floor(listLength / limit) + 1}
          handleClick={() => handleClick(++page)}
        />
        <select onChange={handleSelectChange} value={currentLimit}>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
        </select>
      </PagenationContainer>
    </>
  );
};

export default Pagenation;
