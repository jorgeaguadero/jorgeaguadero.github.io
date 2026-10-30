import { useState } from 'react';
import { cv, labels } from '../content/cv';
import { currentMonth, endMonth, formatRange, toMonth } from '../lib/dates';
import { t } from '../lib/text';
import type { Entry, Lane, Lang } from '../types';

const CHART_START = toMonth('2021-01');
const MIN_MONTHS_FOR_LABEL = 6;

type Bar = { entry: Entry; start: number; end: number };

function toBars(entries: Entry[]): Bar[] {
  return entries
    .map((entry) => ({
      entry,
      start: Math.max(toMonth(entry.start), CHART_START),
      end: endMonth(entry.end),
    }))
    .filter((bar) => bar.end > CHART_START);
}

// Ordenadas por inicio, cada barra va a la primera fila cuya última barra
// termina antes de que ella empiece. Si no cabe en ninguna, abre fila nueva.
function toRows(bars: Bar[]): Bar[][] {
  const rows: Bar[][] = [];
  for (const bar of [...bars].sort((a, b) => a.start - b.start)) {
    const row = rows.find((r) => r[r.length - 1].end <= bar.start);
    if (row) row.push(bar);
    else rows.push([bar]);
  }
  return rows;
}

const LANES: { lane: Lane; rows: Bar[][] }[] = [
  { lane: 'work', rows: toRows(toBars(cv.work)) },
  { lane: 'study', rows: toRows(toBars(cv.education)) },
];

export function Trajectory({ lang }: { lang: Lang }) {
  const [activeId, setActiveId] = useState('stemia');

  const chartEnd = currentMonth() + 1;
  const percent = (month: number) => ((month - CHART_START) / (chartEnd - CHART_START)) * 100;

  const years: number[] = [];
  for (let year = 2021; toMonth(String(year)) < chartEnd; year++) years.push(year);

  const active = [...cv.work, ...cv.education].find((entry) => entry.id === activeId)!;
  const activeLane: Lane = cv.work.includes(active) ? 'work' : 'study';
  const describe = (entry: Entry) =>
    `${t(entry.title, lang)} · ${entry.org} · ${formatRange(entry.start, entry.end, lang)}`;

  return (
    <section className="section" aria-labelledby="trajectory-title">
      <h2 id="trajectory-title" className="section-title">
        {t(labels.trajectory, lang)}
      </h2>

      <div className="card timeline">
        <div className={`timeline-caption lane-${activeLane}`} aria-live="polite">
          <p className="timeline-caption-title">{t(active.title, lang)}</p>
          <p>
            {active.org} · {formatRange(active.start, active.end, lang)}
          </p>
          <a href={`#${active.id}`}>{t(labels.seeDetail, lang)}</a>
        </div>

        {LANES.map(({ lane, rows }) => (
          <div key={lane} className={`lane lane-${lane}`}>
            <p className="lane-name">
              <span className="dot" aria-hidden="true" />
              {t(labels[lane], lang)}
            </p>
            <div className="lane-track">
              {years.map((year) => (
                <span key={year} className="year-line" style={{ left: `${percent(toMonth(String(year)))}%` }} />
              ))}
              {rows.map((row, i) => (
                <div key={i} className="lane-row">
                  {row.map(({ entry, start, end }) => (
                    <button
                      key={entry.id}
                      type="button"
                      className="bar"
                      style={{ left: `${percent(start)}%`, width: `${percent(end) - percent(start)}%` }}
                      aria-label={describe(entry)}
                      aria-pressed={entry.id === activeId}
                      onMouseEnter={() => setActiveId(entry.id)}
                      onFocus={() => setActiveId(entry.id)}
                      onClick={() => setActiveId(entry.id)}
                    >
                      {end - start >= MIN_MONTHS_FOR_LABEL && (
                        <span className="bar-label">{t(entry.short, lang)}</span>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="lane axis" aria-hidden="true">
          <span />
          <div className="lane-track">
            {years.map((year) => (
              <span key={year} className="year-label" style={{ left: `${percent(toMonth(String(year)))}%` }}>
                {year}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
