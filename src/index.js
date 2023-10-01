import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function detectUserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  
  return userLang.split('-')[0];
}

const browserLanguage = detectUserLanguage();

const localeMessages = {
  "es": localeEsMessages,
  "en": localeEnMessages,
  // Agrega otros idiomas según sea necesario
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={browserLanguage} messages= {localeMessages[browserLanguage]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
  , document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
