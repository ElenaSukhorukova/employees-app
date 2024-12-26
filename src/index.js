import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const text = 'Hello world';

// const elem = (
//   <div>
//       <h2 className="class-name">{text}</h2>
//       <lable htmlFor="for-input">Lable for input</lable>
//       <input type="text" />
//       <button />
//   </div>
// );

root.render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
