import styled from 'styled-components';

export function PokeDetail({ pokemon }) {
  if (pokemon) {
    return (
      <PokeDetailWrapper>
        <PokeFigure>
          <div>
            <PokeIMG src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon artwork"/>
          </div>
          <StyledCaption>{pokemon.name}</StyledCaption>
        </PokeFigure>
        
      </PokeDetailWrapper>
    )
  }
  return <></>
}

const PokeDetailWrapper = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`

const PokeFigure = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: #FFCD00;
    padding: 2rem;
    border-radius: 50%;
    box-shadow: -3px 4px 12px rgba(0, 0, 0, 0.2);
  }
`

const PokeIMG = styled.img`
  width: 16rem;
`

const StyledCaption = styled.figcaption`
  font-family: 'Baloo Da 2', cursive;
  color: #356ABC;
  font-weight: 500;
  font-size: 2rem;
  text-transform: capitalize;
  background-color: #FFCD00;
  margin: 2rem 0 0 0;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  box-shadow: -3px 4px 12px rgba(0, 0, 0, 0.2);
`