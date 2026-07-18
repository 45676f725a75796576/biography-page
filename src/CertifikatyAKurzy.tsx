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

export default function CertifikatyAKurzy() {
    // @ts-ignore
    const { t, i18n } = useTranslation();

    return (
        <>
            <Navigation />
            <main>
                <article>
                    <h2>JavaScript Essentials 1</h2>
                    <img src="src/certifikat_js1.jpg" alt="JavaScript Essentials 1 certificate" width="500px" />
                </article>
                <article>
                    <h2>CCNA 1 - Introduction to Networks</h2>
                    <img src="src/ccna1.jpg" alt="CCNA 1 - Introduction to networking certificate" width="500px" />
                </article>
                <article>
                    <h2>CCNA 2 - Switching, Routing and Wireless Essentials</h2>
                    <img src="src/ccna2.jpg" alt="CCNA 2 - Switching, Routing and Wireless Essentials certificate" width="500px" />
                </article>
            </main>
        </>
    );
}
