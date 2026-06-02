import React from 'react'
import ReactDOM from 'react-dom/client'

// NSW Design System base styles (tokens, typography, components).
import 'nsw-design-system/dist/css/main.css'
// Bespoke styles for the value chain, callouts and self-check.
import './index.css'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
