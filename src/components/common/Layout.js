import styled from 'styled-components';

import { Header } from './Header';

export function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        {children}
      </main>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(45deg, #81B214, #FFCC29 );
  overflow: scroll;

  & > main {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 720px) {
    width: 720px;
    height: 700px;
    border-radius: 20px;
    overflow: hidden;
  }
`