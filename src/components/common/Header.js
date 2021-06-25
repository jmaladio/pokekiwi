import { useContext } from 'react';
import styled from 'styled-components';

import { LanguageContext } from '../App';
import logo from '../../assets/img/logo.png';
import kiwi from '../../assets/img/kiwi.png';
import IconJA from '../../assets/img/ja.png';
import IconEN from '../../assets/img/en.png';

export function Header() {

  const { language, setLanguage } = useContext(LanguageContext);

  const handleClickLang = (lang) => lang !== language && setLanguage(lang);

  return (
    <HeaderWrapper>
      <Logo src={logo} alt="PokeKiwi Logo" />
      <Kiwi src={kiwi} alt="PokeKiwi Logo" />
      <IconWrapper>
        <FlagIcon onClick={() => handleClickLang('en')} src={IconEN} aria-label="english icon"></FlagIcon>
        <FlagIcon onClick={() => handleClickLang('ja')} src={IconJA} aria-label="japanese icon"></FlagIcon>
      </IconWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-image: linear-gradient(0, rgba(245, 222, 160, 0.5), rgba(220, 252, 160, 0.1));
  position: relative;
`

const Logo = styled.img`
  width: 18rem;
`

const Kiwi = styled.img`
  width: auto;
  height: 5rem;
  filter: saturate(120%) brightness(130%) hue-rotate(30deg);
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

const FlagIcon = styled.img`
  width: 2rem;
  height: 2rem;
`