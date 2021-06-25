import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { LanguageContext } from '../App';

const API_URI = process.env.REACT_APP_API_URI;

export function PokeName({ name }) {
  const [ nameList, setNameList ] = useState(null);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    const getNames = async () => {
      const getNameTraslations = await axios.get(API_URI + '-species/' + name);
      const namesUsed = getNameTraslations.data.names.filter(element => element.language.name === 'ja' || element.language.name === 'en');
      setNameList(s => {
        const initialValue = {};
        const newNameList = namesUsed.reduce((obj, element) => {
          return {
            ...obj,
            [element.language.name]: element.name
          }
        }, initialValue)
        return {
          ...newNameList
        }
      })
    }

    getNames()
  }, [name, setNameList])


  return (
    <span>{nameList !== null && nameList[language]}</span>
  )


}