import Navigation from "./Navigation";
// @ts-ignore
import { Trans, useTranslation } from 'react-i18next'

// @ts-ignore
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

export default function Zkusenosti() {
    // @ts-ignore
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navigation />
            <main>
                <article>
                    <h2>{t("praxe")}</h2>
                    <h3>{t("cvut")}</h3>
                    <img src="src/certifikat_ctu.jpg" alt="certifikat absolvovani praxe FIT ČVUT" width="500px"/>
                </article>
                <article>
                    <h2>{t('work')}</h2>
                    <h3>{t('work_name')}</h3>
                    <p>{t('work_about')}</p>
                </article>
            </main>
        </>
    );
}
