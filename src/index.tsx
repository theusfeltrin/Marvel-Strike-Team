import React from 'react';
import { createRoot } from 'react-dom/client';
import './main/styles/index.sass';
import App from './main/App';

const appRoot = document.getElementById('root')
const root = createRoot(appRoot as HTMLElement )

root.render(
  <App />
)
