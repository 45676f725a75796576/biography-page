// @ts-nocheck
import { Link } from 'react-router-dom'
// @ts-ignore
import { Trans, useTranslation } from 'react-i18next'
import LangSelect from './LanguageSelector.tsx'

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

export default function Navigation() {
    // @ts-ignore
    const { t, i18n } = useTranslation();

    return (
        <nav>
            <Link to={'/biography-page/main'}>
                <button>{t("home")}</button>
            </Link>
            <Link to={'/biography-page/o-mne'}>
                <button>{t("about")}</button>
            </Link>
            <Link to={ '/biography-page/vzdelani' }>
                <button>{t("schools")}</button>
            </Link>
            <Link to={'/biography-page/certifikaty-a-kurzy'}>
                <button>{t("certs")}</button>
            </Link>
            <Link to={"/biography-page/zkusenosti"}>
                <button>{t("experience")}</button>
            </Link>
            <Link to={"/biography-page/portfolio"}>
                <button>{ t("portfolio") }</button>
            </Link>
            <Link to={"/biography-page/kontakt"}>
                <button>{t("contact")}</button>
            </Link>
            <LangSelect/>
        </nav>
    );
}
