import './bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected here

import App from './components/App'

if (document.getElementById('app')){
    createRoot(document.getElementById('app')).render(<App />);
}
