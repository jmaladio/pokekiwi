import styled from 'styled-components';
import logo from '../../assets/img/logo.png';
import kiwi from '../../assets/img/kiwi.png';

export function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="PokeKiwi Logo" />
      <Kiwi src={kiwi} alt="PokeKiwi Logo" />

    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-image: linear-gradient(0, rgba(245, 222, 160, 0.5), rgba(220, 252, 160, 0.1));
`

const Logo = styled.img`
  width: 18rem;
`

const Kiwi = styled.img`
  width: auto;
  height: 5rem;
  filter: saturate(120%) brightness(130%) hue-rotate(30deg);
`