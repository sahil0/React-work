import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//JSX
ReactDOM.render(<h1> Sahil Mahale</h1>,document.getElementById('root'))

//JSX to simpleReact using Bable 
ReactDOM.render(React.createElement("h1",
null,
"Sahil MAhale"),
document.getElementById("root"));
//Pure JS
var h1=document.createElement("h1");
h1.innerHTML="Sahil Mahaele";
document.getElementById("root").appendChild(h1);