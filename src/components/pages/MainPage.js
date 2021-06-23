import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PokeList } from '../common'
import btnPrev from '../../assets/img/icon_arrowleft.png';
import btnNext from '../../assets/img/icon_arrowright.png';

const API_URI = process.env.REACT_APP_API_URI;

const usePokePagination = () => {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(null);
  const [ maxPage, setMaxPage ] = useState(null);

  const getPokemonList = async ( offset = 0 ) => {
    if (offset) {
      const getListFromAPI = await axios.get(API_URI + '?limit=5&offset=' + offset);
      const { results, count } = getListFromAPI.data;
      setPokemonList(results);
      setCurrentPage(offset / 5 + 1);
      setMaxPage(Math.ceil(count/5))
    } else {
      const getListFromAPI = await axios.get(API_URI + '?limit=5');
      const { results, count } = getListFromAPI.data;
      setPokemonList(results);
      setCurrentPage(1);
      setMaxPage(Math.ceil(count/5));
    }
  }

  useEffect(() => {  
    getPokemonList();
  }, [])

  const getNextPage = () => getPokemonList(currentPage * 5);
  const getPrevPage = () => getPokemonList(currentPage * 5 - 10);


  return {
    pokemonList,
    currentPage,
    maxPage,
    getNextPage,
    getPrevPage
  }
}

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