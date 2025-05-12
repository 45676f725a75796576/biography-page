import Navigation from "./Navigation";
import { Trans, useTranslation } from 'react-i18next'

export default function Zkusenosti() {
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
                    <h2>{t('work')}</h2>
                    <h3>{t('work_name')}</h3>
                    <p>{t('work_about')}</p>
                </article>
            </main>
        </>
    );
}