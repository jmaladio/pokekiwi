import styled from 'styled-components';

import img404 from '../../assets/img/404.png'

export function Page404() {
  return (
    <Page404Container>
      <StyledError>Page 404</StyledError>
      <PokeIMG src={img404} alt="psyduck 404"/>
    </Page404Container>
  )
}

const Page404Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`

const StyledError = styled.h2`
  font-family: 'Baloo Da 2', cursive;
  color: #FFCC29;
  font-weight: 500;
  font-size: 2rem;
  text-transform: capitalize;
  background-color: #206A5D;
  margin: 2rem 0 0 0;
  padding: 0.2rem 1rem;
  border-radius: 10px;
  box-shadow: -3px 4px 12px rgba(0, 0, 0, 0.2);
`

const PokeIMG = styled.img`
  width: 26rem;
`