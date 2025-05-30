import Navigation from "./Navigation";
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

export default function Vzdelani() {
    
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navigation />
            <main>
                <article>
                    <h2>{t('first')}</h2>
                    <p>{t('first_con')}</p>
                    
                </article>
                <article>
                    <h2>{t('sec')}</h2>
                    <p>{t('sec_addr')}</p>
                    <p>{t('sec_obor')}</p>
                    <p>{t('sec_cur')}</p>
                </article>
            </main>
        </>
    );
}