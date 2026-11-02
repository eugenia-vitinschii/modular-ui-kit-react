import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './lib/styles/lib.sass'
import './demo/styles/demo.sass'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
