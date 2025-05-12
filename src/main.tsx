import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Omne from './Omne.tsx'
import Vzdelani from './Vzdelani.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CertifikatyAKurzy from './CertifikatyAKurzy.tsx'
import Zkusenosti from './Zkusenosti.tsx'
import Portfolio from './Portfolio.tsx'
import Kontakt from './Kontakt.tsx'
import i18n from './i18n'

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/o-mne', element: <Omne /> },
    { path: '/vzdelani', element: <Vzdelani /> },
    { path: '/certifikaty-a-kurzy', element: <CertifikatyAKurzy /> },
    { path: '/zkusenosti', element: <Zkusenosti /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/kontakt', element: <Kontakt /> }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={ router } />
  </StrictMode>,
)
