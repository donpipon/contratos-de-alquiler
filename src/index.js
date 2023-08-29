import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


// https://formik.org/
// https://react-hook-form.com/
// https://github.com/immerjs/immer
// https://github.com/immutable-js/immutable-js


const root = ReactDOM.createRoot(document.querySelector('#root'));
//root.render(<h1>PRUEBA</h1>)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
