import ReactDOM from 'react-dom/client';
import React from 'react';

import './styles/global.css';
import { Home } from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);