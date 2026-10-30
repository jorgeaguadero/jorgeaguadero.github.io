import { useEffect, useState } from 'react';
import { EntryList } from './components/EntryList';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { cv, labels } from './content/cv';
import type { Lang } from './types';

export default function App() {
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <main className="container">
        <EntryList id="experience" title={labels.experience} lane="work" entries={cv.work} lang={lang} />
        <EntryList id="education" title={labels.education} lane="study" entries={cv.education} lang={lang} />
        <Skills lang={lang} />
      </main>
      <footer className="footer container">
        © {new Date().getFullYear()} {cv.name}
      </footer>
    </>
  );
}
