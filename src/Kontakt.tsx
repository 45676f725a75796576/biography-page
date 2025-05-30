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

export default function Kontakt() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navigation />
            <main>
                <article>
                    <h2>E-mail</h2>
                    <p>egor.zuyev33@gmail.com</p>
                </article>
            </main>
        </>
    );
}