import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.robinwieruch.de/react-internationalization"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Blog Article for this Codebase
        </a>
        <p>{t("welcome", "Hello there")}</p>
      </header>
    </div>
  );
}

export default App;
