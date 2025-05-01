import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Adicione um arquivo de estilo se necessário

// Componente principal do app
const App = () => {
  return <h1>Olá, Mundo!</h1>;
};

// Renderiza o componente App no elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
