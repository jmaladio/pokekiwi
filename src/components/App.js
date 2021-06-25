import { createContext } from 'react';

import { useLanguageWithLS } from './hooks'
import Routes from './Routes';
import { Layout } from './common';

export const LanguageContext = createContext({
  language: 'en'
});

function App() {
  const [ language, setLanguage ] = useLanguageWithLS();

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
        <Routes />
      </Layout>
    </LanguageContext.Provider>
  );
}

export default App;