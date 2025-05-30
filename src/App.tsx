import './App.css'
import Navigation from './Navigation.tsx'
import { Trans, useTranslation } from 'react-i18next'



const languages = [
    { value: 'en', name: 'English' },
    { value: 'cs', name: 'Czech' },
    { value: 'jav', name: 'Javanese' },
    { value: 'tlh', name: 'Klingon' },
    { value: 'hu', name: 'Hungarian' },
    { value: 'epo', name: 'Esperanto' },
    { value: 'la', name: 'Latin' },
    { value: 'kk', name: 'Kazakh' },
    { value: 'art-x-navi', name: 'Navi' }
]

function App() {
  const { t, i18n } = useTranslation();

  return (
      <>
        <Navigation />
          <main>
              <h1>Yegor Zuyev</h1>
              <p>"{t('motto')}"</p>
          </main>
    </>
  )
}

export default App
