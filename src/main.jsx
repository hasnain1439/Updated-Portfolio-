import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Vercel Web Analytics: page views & visitors (only reports on Vercel deployments) */}
    <Analytics />
  </StrictMode>,
)
