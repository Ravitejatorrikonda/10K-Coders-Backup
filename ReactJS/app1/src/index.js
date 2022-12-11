import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import './FunctionalComponent/style.css';
// import App from './App';
import ReactProject1 from "./ReactProject1";
import React1 from './React1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ReactProject1/>
    <React1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
