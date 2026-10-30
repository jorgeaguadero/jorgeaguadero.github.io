import { cv, labels } from '../content/cv';
import { t } from '../lib/text';
import type { Lang } from '../types';

export function Skills({ lang }: { lang: Lang }) {
  return (
    <section className="section skills">
      <div>
        <h2 className="section-title">{t(labels.skills, lang)}</h2>
        <dl className="definitions">
          {cv.skills.map((skill) => (
            <div key={t(skill.name, 'es')}>
              <dt>{t(skill.name, lang)}</dt>
              <dd>{skill.items}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <h2 className="section-title">{t(labels.languages, lang)}</h2>
        <dl className="definitions">
          {cv.languages.map((language) => (
            <div key={t(language.name, 'es')}>
              <dt>{t(language.name, lang)}</dt>
              <dd>{t(language.level, lang)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
