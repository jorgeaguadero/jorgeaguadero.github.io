export type Lang = 'es' | 'en';

// Si un texto es igual en los dos idiomas, se escribe una sola vez
export type Text = string | { es: string; en: string };

export type Lane = 'work' | 'study';

export type Entry = {
  id: string;
  short: Text; // nombre que se ve dentro de la barra del cronograma
  title: Text;
  org: string;
  detail?: Text;
  start: string; // '2025-09' o '2025'
  end: string | null; // null = actualidad
  points?: Text[];
};

export type Project = {
  id: string;
  title: Text;
  org: Text;
  start: string;
  end: string | null;
  repo?: string;
  summary: Text;
  problem: Text;
  role: Text;
  outcome: Text[];
  tags: string[];
  details: Text[];
  image?: { src: string; alt: Text };
  video?: string;
  poster?: string;
  caption?: Text; // pie de la captura o del vídeo
};

export type Contact = { label: string; href: string };

export type Skill = { name: Text; items: string };

export type Language = { name: Text; level: Text };

export type CV = {
  name: string;
  role: Text;
  location: Text;
  summary: Text;
  contact: Contact[];
  projects: Project[];
  work: Entry[];
  education: Entry[];
  skills: Skill[];
  languages: Language[];
};
