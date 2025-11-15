// @ts-nocheck
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
import i18n from './i18n.ts'

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: 'biography-page', element: <App /> },
    { path: 'biography-page/', element: <App /> },
    { path: 'biography-page/main', element: <App /> },
    { path: 'biography-page/o-mne', element: <Omne /> },
    { path: 'biography-page/vzdelani', element: <Vzdelani /> },
    { path: 'biography-page/certifikaty-a-kurzy', element: <CertifikatyAKurzy /> },
    { path: 'biography-page/zkusenosti', element: <Zkusenosti /> },
    { path: 'biography-page/portfolio', element: <Portfolio /> },
    { path: 'biography-page/kontakt', element: <Kontakt /> }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={ router } />
  </StrictMode>,
)
