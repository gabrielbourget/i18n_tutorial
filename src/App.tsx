import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation(['translation', 'welcome']);

  const changeLanguage = (code: string) => i18n.changeLanguage(code);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Internationalization demo :)</p>
        <a
          className="App-link"
          href="https://www.robinwieruch.de/react-internationalization"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original blog article for this demonstration
        </a>
        <p>Languages available are {t('translation:de')} and {t('translation:en')}</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "400px", padding: 15}}>
          <div style={{ ...buttonStyle }} onClick={() => changeLanguage("de")}>
            {t("translation:de").toUpperCase()}
          </div>
          <div style={{ marginRight: 30}}></div>
          <div style={{...buttonStyle}} onClick={() => changeLanguage("en")}>
            {t("translation:en").toUpperCase()}
          </div>
        </div>
        {/* -> Calls to t() take a first param which is the translation key, and a second param which is a fallback value */}
        <p>{t("welcome:title", "Hello there")}</p>
        {/* <p>{t("welcome:content.text", "Welcome to the demonstration app")}</p> */}
        <p>
          <Trans i18nKey="welcome:content.text">
            Welcome to the <strong>demonstration app</strong>
          </Trans>
        </p>
      </header>
    </div>
  );
}

export default App;

const buttonStyle = {
  height: 40,
  width: 'auto',
  borderRadius: 6,
  padding: 5,
  backgroundColor: "#5433c4",
  fontSize: 18,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  boxShadow: "0px 4px 5px rgba(255,255,255,0.3)",
  cursor: "pointer", 
};
