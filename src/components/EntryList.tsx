import { duration, formatRange } from '../lib/dates';
import { t } from '../lib/text';
import type { Entry, Lane, Lang, Text } from '../types';

type Props = {
  id: string;
  title: Text;
  lane: Lane;
  entries: Entry[];
  lang: Lang;
};

export function EntryList({ id, title, lane, entries, lang }: Props) {
  return (
    <section className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        <span className={`dot lane-${lane}`} aria-hidden="true" />
        {t(title, lang)}
      </h2>

      <div className="entries">
        {entries.map((entry) => {
          const length = duration(entry.start, entry.end, lang);
          return (
            <article key={entry.id} id={entry.id} className="entry">
              <p className="entry-dates">
                <span>{formatRange(entry.start, entry.end, lang)}</span>
                {length && <span>{length}</span>}
              </p>
              <div>
                <h3>{t(entry.title, lang)}</h3>
                <p className="entry-org">
                  {entry.org}
                  {entry.detail && ` · ${t(entry.detail, lang)}`}
                </p>
                {entry.points && (
                  <ul className="entry-points">
                    {entry.points.map((point, i) => (
                      <li key={i}>{t(point, lang)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
