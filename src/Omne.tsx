import Navigation from "./Navigation"
import { Trans, useTranslation } from 'react-i18next'



const languages = [
    { value: 'en', name: 'English' },
    { value: 'cs', name: 'Czech' }
]

export default function Omne()
{
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navigation/>
        <main>
            <h2>Yegor Zuyev</h2>
            <article>
                    <p>{t('status')}</p>
            </article>
            <article>
                <h3>{t('langs')}</h3>
                <p>{t('ru')}</p>
                <p>{t('cs')}</p>
                <p>{t('en')}</p>
                <p>{t('de')}</p>
            </article>
            </main>
        </>
    )
}
