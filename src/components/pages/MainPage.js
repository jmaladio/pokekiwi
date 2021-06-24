import styled from 'styled-components';

import { usePokePagination } from '../hooks';
import { PokeList } from '../common'
import btnPrev from '../../assets/img/icon_arrowleft.png';
import btnNext from '../../assets/img/icon_arrowright.png';

export function MainPage() {
  const { pokemonList, currentPage, maxPage, getNextPage, getPrevPage } = usePokePagination();

  return (
    <MainPageWrapper>
      <PaginationPanel>
        <PaginationBtn src={btnPrev} onClick={getPrevPage}/>
        <span>{`${currentPage}/${maxPage}`}</span>
        <PaginationBtn src={btnNext} onClick={getNextPage}/>
      </PaginationPanel>
      <PokeList list={pokemonList} />
    </MainPageWrapper>
  )
}

const MainPageWrapper = styled.div`
  padding: 3rem 2rem 1rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  width: 100%;
`

const PaginationPanel = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 5rem;
`

const PaginationBtn = styled.img`
  width: 2.5rem;
  height: auto;
  cursor: pointer;
`