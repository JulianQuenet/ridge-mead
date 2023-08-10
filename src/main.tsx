import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={null}>
    <App />
    <div className="dot" />
  </Suspense>
);
