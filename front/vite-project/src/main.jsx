import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyName from './components/MyName.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyName />
  </StrictMode>,
)
