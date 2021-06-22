import { Link } from 'react-router-dom';
import styled from 'styled-components';

import pokeball from '../../assets/img/pokeball.png';

export function PokeList({ list }) {

  const item = list.map(({name, url}) => (
    <li key={url}>
      <StyledLink to={"/pokemon/" + name}>
        <Pokeball src={pokeball} />
        {name}
      </StyledLink>
    </li>
    ))

  return (
    <PokeListWrapper>
      {item}
    </PokeListWrapper>
  )
}

const PokeListWrapper = styled.ul`
  list-style: none;

  > li {
    display: flex;
    align-items: center;
  }
`

const StyledLink = styled(Link)`
  font-family: 'Baloo Da 2', cursive;
  color: #356ABC;
  font-weight: 300;
  text-decoration: none;
  font-size: 2rem;
  text-transform: capitalize;
  background-color: #FFCD00;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
`

const Pokeball = styled.img`
  width: 2rem;
  height: auto;
  margin-right: 1rem;
`