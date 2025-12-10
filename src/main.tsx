import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ShoppApp } from './ShoppApp.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <ShoppApp />
        
    </StrictMode>
)
