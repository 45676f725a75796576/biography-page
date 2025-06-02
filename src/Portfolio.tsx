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
    { value: 'kk', name: 'Kazakh' },
    { value: 'art-x-navi', name: 'Navi'}
]

export default function Portfolio() {
    // @ts-ignore
    const { t, i18n } = useTranslation();
    return (
        <>
            <Navigation />
            <main>
            <article>
                    <h2>{t('rac_game')}</h2>
                    <h3>Old school racing</h3>
                    <p>{t('rac_about')}</p>
                    <a href="https://egorzuyev.itch.io/oldschoolracing">{t('game_url')}</a>
                </article>
                <article>
                    <h2>{t('hor_game')}</h2>
                    <h3>DrinkEnergyDrink</h3>
                    <p>{t('hor_about')}</p>
                    <a href="https://egorzuyev.itch.io/drinkenergydrink">{t('game_url')}</a>
                </article>
                <article>
                    <h2>{ t("synth") }</h2>
                    <a href="https://github.com/45676f725a75796576/ArduinoSynthesizer">{ t("git_url") }</a>
                </article>
                <article>
                    <h2>{t("tama")}</h2>
                    <a href="https://github.com/45676f725a75796576/tamagotchi">{t("git_url")}</a>
                </article>
                <article>
                    <h2>{ t("rpg") }</h2>
                    <a href="https://github.com/45676f725a75796576/RPG2Dgame">{t("git_url")}</a>
                </article>
            </main>
        </>
    );
}
