import { useState, createContext } from 'react';

import Routes from './Routes';
import { Layout } from './common';

export const LanguageContext = createContext({
  language: 'en'
});

function App() {
  const [ language, setLanguage ] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Layout>
        <Routes />
      </Layout>
    </LanguageContext.Provider>
  );
}

export default App;