import './App.css'
import Navigation from './Navigation.tsx'
import { Trans, useTranslation } from 'react-i18next'



const languages = [
    { value: 'en', name: 'English' },
    { value: 'cs', name: 'Czech' }
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
