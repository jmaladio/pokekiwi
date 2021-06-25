import { useContext } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { LanguageContext } from '../App';
import logo from '../../assets/img/logo.png';
import kiwi from '../../assets/img/kiwi.png';
import IconJA from '../../assets/img/ja.png';
import IconEN from '../../assets/img/en.png';
import IconBack from '../../assets/img/back.png';

export function Header() {

  const { language, setLanguage } = useContext(LanguageContext);
  const match = useRouteMatch('/pokemon/:string')
  const history = useHistory();

  const handleClickLang = (lang) => lang !== language && setLanguage(lang);

  return (
    <HeaderWrapper>
      <ControlWrapper>
        {match !== null && <RoundIcon onClick={() => history.goBack()} src={IconBack} aria-label="back icon" />}
      </ControlWrapper>
      <Logo src={logo} alt="PokeKiwi Logo" />
      <Kiwi src={kiwi} alt="PokeKiwi Logo" />
      <FlagsWrapper>
        <RoundIcon onClick={() => handleClickLang('en')} src={IconEN} aria-label="english selection icon" />
        <RoundIcon onClick={() => handleClickLang('ja')} src={IconJA} aria-label="japanese selection icon" />
      </FlagsWrapper>
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
const FlagsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`
const ControlWrapper = styled.div`
  width: 2rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`

const RoundIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`