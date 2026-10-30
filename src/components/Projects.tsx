import { cv, labels } from '../content/cv';
import { formatRange } from '../lib/dates';
import { t } from '../lib/text';
import type { Lang } from '../types';

export function Projects({ lang }: { lang: Lang }) {
  return (
    <section className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">
        {t(labels.projects, lang)}
      </h2>

      {cv.projects.map((project) => (
        <article key={project.id} className="card project">
          <h3>{t(project.title, lang)}</h3>
          <p className="project-period">
            {project.org} · {formatRange(project.start, project.end, lang)}
          </p>
          <p className="project-summary">{t(project.summary, lang)}</p>

          <div className="project-blocks">
            <div>
              <h4>{t(labels.problem, lang)}</h4>
              <p>{t(project.problem, lang)}</p>
            </div>
            <div>
              <h4>{t(labels.role, lang)}</h4>
              <p>{t(project.role, lang)}</p>
            </div>
            <div className="project-outcome">
              <h4>{t(labels.outcome, lang)}</h4>
              <ul>
                {project.outcome.map((item, i) => (
                  <li key={i}>{t(item, lang)}</li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <details className="project-details">
            <summary>{t(labels.details, lang)}</summary>
            <ul>
              {project.details.map((item, i) => (
                <li key={i}>{t(item, lang)}</li>
              ))}
            </ul>
          </details>

          {project.video && (
            <video
              className="project-video"
              src={project.video}
              poster={project.poster}
              controls
              muted
              playsInline
              preload="none"
            />
          )}
        </article>
      ))}
    </section>
  );
}
