import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { PokeDetail } from '../common/PokeDetail';

const API_URI = process.env.REACT_APP_API_URI;

export function DetailPage() {
  const [ pokemon, setPokemon ] = useState(null);
  const { string } = useParams();
  useEffect(() => {
    const getPokemonDetailsFromAPI = async () => {
      const pokemonDetails = await axios.get(API_URI + "/" + string);
      setPokemon(pokemonDetails.data);
    }
    getPokemonDetailsFromAPI();
  }, [string])

  return (
    <DetailPageWrapper>
      <PokeDetail pokemon={pokemon} />
    </DetailPageWrapper>
  )
}

const DetailPageWrapper = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
`