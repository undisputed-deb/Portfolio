import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- 1. Import BrowserRouter
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

// 2. Wrap your App in BrowserRouter and add the basename prop
root.render(
  <BrowserRouter basename="/Portfolio/">
    <App />
  </BrowserRouter>
)