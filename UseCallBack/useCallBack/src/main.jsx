import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseCallBack from './UseCallBack.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCallBack />
  </StrictMode>,
)
