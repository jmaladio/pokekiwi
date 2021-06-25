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
        <PaginationBtn src={btnPrev} orientation="left" currentPage={currentPage} maxPage={maxPage} onClick={getPrevPage}/>
        <PaginationCount>{`${currentPage} / ${maxPage}`}</PaginationCount>
        <PaginationBtn src={btnNext} orientation="right" currentPage={currentPage} maxPage={maxPage} onClick={getNextPage}/>
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
  align-items: center;
  padding: 0 5rem;
`

const PaginationBtn = styled.img`
  width: 2.5rem;
  height: auto;
  cursor: ${props => (props.currentPage - 1 === 0 && props.orientation === 'left') || (props.currentPage + 1 > props.maxPage  && props.orientation === 'right') ? 'default' : 'pointer'};
  filter: ${props => (props.currentPage - 1 === 0 && props.orientation === 'left') || (props.currentPage + 1 > props.maxPage  && props.orientation === 'right') ? 'saturate(0)' : 'none'};
`

const PaginationCount = styled.p`
  font-family: 'Baloo Da 2', cursive;
`