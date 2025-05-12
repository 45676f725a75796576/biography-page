import Navigation from "./Navigation";
import { useTranslation } from 'react-i18next'

export default function Vzdelani() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navigation />
            <main>
                <article>
                    <h2>Základní škola</h2>
                    <p>FZŠ Mezi školami PedfUK Praha 13</p>
                    
                </article>
                <article>
                    <h2>Střední škola</h2>
                    <p>Střední průmyslová škola elektrotechnická, Ječná 30</p>
                    <p>Obor: IT</p>
                    <p>Aktuální studium, 3. ročník.</p>
                </article>
            </main>
        </>
    );
}