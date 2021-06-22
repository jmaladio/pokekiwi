import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { PokeList } from '../common'

const API_URI = process.env.REACT_APP_API_URI;

export function MainPage() {
  const [ pokemonList, setPokemonList ] = useState([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const getListFromAPI = await axios.get(API_URI + '?limit=5');
      console.log(getListFromAPI);
      const { results } = getListFromAPI.data;
      setPokemonList(results);
    }

    getPokemonList();
  }, [])


  return (
    <MainPageWrapper>
      <PokeList list={pokemonList} />
    </MainPageWrapper>
  )
}

const MainPageWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
`