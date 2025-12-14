import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss';
import { MainRoutes } from './MainRoutes';
import { ThemeProvider } from './providers/ThemeProvider';
import sprite from '@/assets/icons/sprite.svg?raw';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div
      dangerouslySetInnerHTML={{ __html: sprite }}
      style={{ display: 'none' }}
    />

    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>,
)
