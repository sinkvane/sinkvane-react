import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss';
import { MainRoutes } from './MainRoutes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRoutes/>
  </StrictMode>,
)
