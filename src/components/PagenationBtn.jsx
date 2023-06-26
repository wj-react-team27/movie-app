import React from 'react';
import styled from 'styled-components';

const PagenationBtnContainer = styled.button`
  background: ${(props) => (props.currentPage ? '#000' : '#fff')};
  color: ${(props) => (props.currentPage ? '#fff' : '#000')};
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.currentPage ? '#000' : '#eee')};
  }
`;

const PagenationBtn = ({ name, currentPage, isHide, handleClick }) => {
  return isHide ? (
    <></>
  ) : (
    <PagenationBtnContainer currentPage={currentPage} onClick={handleClick}>
      {name}
    </PagenationBtnContainer>
  );
};

export default PagenationBtn;
