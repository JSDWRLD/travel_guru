import React from 'react';
import ReactDOM  from 'react-dom';

import App from './App';

import BrowserRouter from 'react-router-dom';

// mounting application onto the root div
ReactDOM.render((<BrowserRouter basename={process.env.PUBLIC_URL}>
                    <App />
                </BrowserRouter>), document.getElementById('root'));
