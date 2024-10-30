import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Challenge (App.jsx):
// 1. Add a behavior so that when the mouse hovers over the button, the color changes.
// 1.1 You can use the onMouseOver event.
// 2. When the mouse moves out, the button should return to its previous color.
// 2.1 Research which event you can use for this behavior.
// 3. When you press the button, the text should change to "Submitted".