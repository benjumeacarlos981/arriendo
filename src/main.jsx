import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const contenedor = document.getElementById('root');

ReactDOM.render(<App />, contenedor);