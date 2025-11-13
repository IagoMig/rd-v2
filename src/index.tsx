import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Add global styles for animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 1.2s forwards;
  }
`;
document.head.appendChild(style);
render(<App />, document.getElementById('root'));