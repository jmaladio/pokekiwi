import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI;

export const usePokePagination = () => {
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

  const getNextPage = () => currentPage < maxPage && getPokemonList(currentPage * 5);

  const getPrevPage = () => currentPage > 1 && getPokemonList(currentPage * 5 - 10);

  const getSpecificPage = (page) => page >= 1 && page <= maxPage && getPokemonList((currentPage - 1) * 5);

  const getFirstPage = () => getPokemonList();

  const getLastPage = () => getPokemonList((maxPage - 1) * 5);


  return {
    pokemonList,
    currentPage,
    maxPage,
    getNextPage,
    getPrevPage,
    getSpecificPage,
    getFirstPage,
    getLastPage
  }
}

export const useLanguageWithLS = () => {
  const [ language, setLanguage ] = useState(s => window.localStorage.getItem('lang') || 'en');
  console.log(language)
  useEffect(() => {
    window.localStorage.setItem('lang', language);
  }, [language])

  return [
    language,
    setLanguage
  ]
}