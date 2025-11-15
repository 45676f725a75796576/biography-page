// @ts-nocheck
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
    { value: 'kk', name: 'Kazakh' }
]

const js1cert = import.meta.glob("./src/certifikat_js1.{png,jpg,jpeg,webp,gif}", {
    eager: true,
});

const js1sources = Object.values(js1cert).map((mod: any) => mod.default);

export default function CertifikatyAKurzy() {
    // @ts-ignore
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navigation />
            <main>
                <article>
                    <h2>JavaScript essentials 1</h2>
                    {sources.map((src, i) => (
                        <img key={i} src={src} alt="JavaScript Essentials 1 certificate" />
                    ))}
                </article>
            </main>
        </>
    );
}
