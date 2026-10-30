import { cv, labels } from '../content/cv';
import { t } from '../lib/text';
import type { Lang } from '../types';

type Props = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

const LANGS: Lang[] = ['es', 'en'];

export function Header({ lang, onLangChange }: Props) {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-top">
          <p className="hero-role">
            {t(cv.role, lang)} · {t(cv.location, lang)}
          </p>
          <div className="lang-switch" role="group" aria-label={t(labels.language, lang)}>
            {LANGS.map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                aria-pressed={option === lang}
                onClick={() => onLangChange(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <h1 className="hero-name">{cv.name}</h1>
        <p className="hero-summary">{t(cv.summary, lang)}</p>

        <div className="hero-actions">
          <ul className="contact">
            {cv.contact.map((item) => (
              <li key={item.href} className={item.printOnly ? 'print-only' : undefined}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button type="button" className="pdf-button" onClick={() => window.print()}>
            {t(labels.savePdf, lang)}
          </button>
        </div>
      </div>
    </header>
  );
}
