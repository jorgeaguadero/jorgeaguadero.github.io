import type { CV, Text } from '../types';

export const cv: CV = {
  name: 'Jorge Aguadero García',
  role: {
    es: 'Full Stack Developer y AI Engineer',
    en: 'Full Stack Developer & AI Engineer',
  },
  location: { es: 'Salamanca, España', en: 'Salamanca, Spain' },
  summary: {
    es: 'Casi cuatro años construyendo software en producción. Hoy me especializo en plataformas web con agentes de IA integrados: orquestación de agentes, pipelines RAG e integración de LLMs con Python, FastAPI, Next.js y React. Mi base full stack (Node.js, NestJS, Vue.js, PHP y Symfony) me permite llevar un producto de la idea al despliegue, tanto en proyectos nuevos como en código heredado.',
    en: 'Almost four years building software in production. Today I specialize in web platforms with built-in AI agents: agent orchestration, RAG pipelines and LLM integration with Python, FastAPI, Next.js and React. My full stack background (Node.js, NestJS, Vue.js, PHP and Symfony) lets me take a product from idea to deployment, on both new projects and legacy code.',
  },
  contact: [
    { label: 'jorgeaguaderodev@gmail.com', href: 'mailto:jorgeaguaderodev@gmail.com' },
    { label: 'linkedin.com/in/jorgeaguadero', href: 'https://www.linkedin.com/in/jorgeaguadero' },
    { label: 'github.com/jorgeaguadero', href: 'https://github.com/jorgeaguadero' },
  ],

  projects: [
    {
      id: 'multiagent-platform',
      title: {
        es: 'Plataforma multiagente para la dirección de una gran empresa',
        en: 'Multi-agent platform for the leadership of a large company',
      },
      org: 'STEMIA',
      start: '2025-12',
      end: null,
      summary: {
        es: 'Cinco asistentes de IA en una sola aplicación para que la dirección prepare reuniones y analice datos financieros y de negocio, con una regla: si no hay dato que lo respalde, no se inventa.',
        en: 'Five AI assistants in a single application so leadership can prepare meetings and analyze financial and business data, with one rule: if there is no data to back it up, nothing is made up.',
      },
      problem: {
        es: 'Los directivos reparten su tiempo entre reuniones, informes de la competencia, datos de ventas y la red de tiendas, cada cosa en una herramienta distinta. Y a ese nivel, una cifra inventada por una IA no es un fallo menor: acaba en una mala decisión.',
        en: 'Executives split their time between meetings, competitor reports, sales data and the store network, each in a different tool. And at that level, a figure invented by an AI is not a minor glitch: it ends up in a bad decision.',
      },
      role: {
        es: 'Diseñé y construí casi por completo el agente de inteligencia financiera y el de agenda ejecutiva, la mayor parte de la API de la plataforma y el CI/CD, y escribí 10 de los 15 documentos de decisiones de arquitectura (ADR) del proyecto. Orquestación de agentes propia, sin frameworks, con arquitectura hexagonal y tests que impiden saltarse las capas.',
        en: "I designed and built almost all of the financial intelligence agent and the executive agenda agent, most of the platform's API and the CI/CD, and wrote 10 of the project's 15 architecture decision records (ADRs). In-house agent orchestration, no frameworks, with hexagonal architecture and tests that stop anyone from skipping layers.",
      },
      outcome: [
        {
          es: 'El agente financiero lee informes anuales en PDF y XBRL y responde con la cifra y su fuente (documento y página) o con una cita literal; si el dato no existe, se abstiene y explica qué falta. Lo respaldan unos 2.000 tests.',
          en: "The financial agent reads annual reports in PDF and XBRL and answers with the figure and its source (document and page) or with a verbatim quote; if the data doesn't exist, it abstains and explains what is missing. Around 2,000 tests back it up.",
        },
        {
          es: 'Ingesta reproducible: el mismo PDF procesado dos veces daba 318 y 306 métricas; con una caché de clasificaciones del LLM, el resultado es siempre el mismo.',
          en: 'Reproducible ingestion: the same PDF processed twice gave 318 and 306 metrics; with a cache of LLM classifications, the result is always the same.',
        },
        {
          es: 'Seguimiento de comités: de ver entre un 3 y un 9 % de cada sesión a leerlas completas con map-reduce, con un 100 % de citas literales en la validación.',
          en: 'Committee tracking: from covering between 3% and 9% of each session to reading them in full with map-reduce, with 100% verbatim quotes in validation.',
        },
        {
          es: 'Actas de consejo procesadas con Azure OpenAI en la UE y con los emails enmascarados antes de llegar al modelo.',
          en: 'Board minutes processed with Azure OpenAI in the EU, with emails masked before they reach the model.',
        },
      ],
      tags: ['Multi-agent', 'RAG', 'LLM', 'FastAPI', 'Next.js', 'DuckDB', 'Azure OpenAI'],
      details: [
        {
          es: 'Sin framework de agentes: cada paso tenía que ser auditable, poder abstenerse con un motivo y probarse sin llamar al LLM. Con código propio, cada decisión de enrutado es una función con su test.',
          en: 'No agent framework: every step had to be auditable, able to abstain with a reason and testable without calling the LLM. With our own code, every routing decision is a function with its own test.',
        },
        {
          es: 'Heurística primero y LLM solo para lo ambiguo al clasificar las tablas de los informes.',
          en: 'Heuristics first, and the LLM only for ambiguous cases, when classifying the tables in the reports.',
        },
        {
          es: 'RAG acotado por empresa en un corpus multiempresa, con verificación posterior y abstención si la respuesta no corresponde a la empresa pedida.',
          en: 'Company-scoped RAG over a multi-company corpus, with a verification step afterwards and abstention if the answer does not belong to the requested company.',
        },
        {
          es: 'Map-reduce para el seguimiento de comités: una llamada por sesión extrae compromisos con su cita literal, y un compromiso solo pasa a "cumplido" cuando una sesión posterior lo cierra de forma explícita.',
          en: 'Map-reduce for committee tracking: one call per session extracts commitments with their verbatim quote, and a commitment only becomes "fulfilled" when a later session explicitly closes it.',
        },
      ],
    },
  ],

  work: [
    {
      id: 'stemia',
      short: 'STEMIA',
      title: 'Full Stack Developer & AI Engineer',
      org: 'STEMIA',
      detail: 'Salamanca',
      start: '2025-09',
      end: null,
      points: [
        {
          es: 'Desarrollo de plataformas web con agentes de IA integrados, de principio a fin: interfaz, API y capa de agentes.',
          en: 'End-to-end development of web platforms with built-in AI agents: interface, API and agent layer.',
        },
        {
          es: 'Orquestación propia de agentes con integración directa de LLMs, sin frameworks de terceros.',
          en: 'In-house agent orchestration with direct LLM integration, without third-party frameworks.',
        },
        {
          es: 'Pipelines RAG con ingesta documental y transcripción de audio para dar acceso conversacional a información dispersa en múltiples fuentes.',
          en: 'RAG pipelines with document ingestion and audio transcription to give conversational access to information spread across multiple sources.',
        },
        {
          es: 'Backend en Python y FastAPI; frontend en Next.js y React. PostgreSQL y Docker sobre Linux.',
          en: 'Backend in Python and FastAPI; frontend in Next.js and React. PostgreSQL and Docker on Linux.',
        },
        {
          es: 'Uso de Claude Code y OpenAI Codex en el ciclo de desarrollo para acelerar el prototipado y la revisión de código.',
          en: 'Claude Code and OpenAI Codex in the development cycle to speed up prototyping and code review.',
        },
        {
          es: 'Trabajo en equipo con Kanban, revisiones de código y despliegue continuo sobre proyectos nuevos y heredados.',
          en: 'Teamwork with Kanban, code reviews and continuous deployment on both new and legacy projects.',
        },
      ],
    },
    {
      id: 'dipe',
      short: 'dipe',
      title: 'Frontend Developer',
      org: 'dipe.agency',
      detail: { es: 'proyecto QUARK Football', en: 'QUARK Football project' },
      start: '2025-03',
      end: '2025-05',
      points: [
        {
          es: 'Desarrollo del frontend con React: me incorporé de forma puntual para construir la interfaz de usuario de la aplicación.',
          en: "Frontend development with React: I joined for a short engagement to build the application's user interface.",
        },
      ],
    },
    {
      id: 'cloudman',
      short: 'Cloudman',
      title: 'Junior Full Stack Developer',
      org: 'Cloudman',
      detail: { es: 'proyecto GPAR para Altertec', en: 'GPAR project for Altertec' },
      start: '2024-05',
      end: '2024-11',
      points: [
        {
          es: 'Desarrollo de GPAR, plataforma que centraliza la gestión y el control de procesos empresariales de Altertec en una única herramienta.',
          en: "Development of GPAR, a platform that brings the management and control of Altertec's business processes into a single tool.",
        },
        {
          es: 'Backend con Node.js y NestJS: diseño de API REST y módulos de negocio para los flujos de gestión de datos de la operativa.',
          en: 'Backend with Node.js and NestJS: REST API design and business modules for the data management flows of day-to-day operations.',
        },
        {
          es: 'Frontend con Vue.js: interfaces que permiten a los equipos operar los procesos de negocio de forma autónoma.',
          en: 'Frontend with Vue.js: interfaces that let teams run business processes on their own.',
        },
        {
          es: 'Agile y Scrum con revisión de código y despliegue continuo.',
          en: 'Agile and Scrum with code review and continuous deployment.',
        },
      ],
    },
    {
      id: 'air-institute',
      short: 'AIR',
      title: 'Junior Full Stack Developer',
      org: 'AIR Institute',
      detail: { es: 'BISITE, Universidad de Salamanca', en: 'BISITE, University of Salamanca' },
      start: '2023-09',
      end: '2024-05',
      points: [
        {
          es: 'Desarrollo backend (Node.js, Express y Go) en proyectos de investigación aplicada, convirtiendo prototipos de investigación en servicios funcionales.',
          en: 'Backend development (Node.js, Express and Go) in applied research projects, turning research prototypes into working services.',
        },
        {
          es: 'Frontend con Vue.js e implementaciones sobre Drupal para acercar los resultados a usuarios finales.',
          en: 'Frontend with Vue.js and Drupal implementations to bring the results closer to end users.',
        },
        {
          es: 'Colaboración con investigadores en un entorno multidisciplinar para traducir requisitos científicos en software.',
          en: 'Collaboration with researchers in a multidisciplinary environment to translate scientific requirements into software.',
        },
      ],
    },
    {
      id: 'undanet',
      short: 'Undanet',
      title: 'Junior Full Stack Developer',
      org: 'Undanet',
      start: '2022-08',
      end: '2023-03',
      points: [
        {
          es: 'Desarrollo del portal B2B de Neumáticos Andrés (PHP, Symfony y Vue.js) para digitalizar los pedidos de clientes mayoristas.',
          en: 'Development of the Neumáticos Andrés B2B portal (PHP, Symfony and Vue.js) to digitize orders from wholesale customers.',
        },
        {
          es: 'Integración con sistemas de catálogo, precios y pedidos para automatizar la operativa comercial.',
          en: 'Integration with catalog, pricing and ordering systems to automate sales operations.',
        },
      ],
    },
    {
      id: 'ntt-data',
      short: 'NTT',
      title: 'Junior Developer',
      org: 'NTT DATA',
      start: '2022-01',
      end: '2022-08',
      points: [
        {
          es: 'Desarrollo sobre Natural/Adabas para el sistema del INSS (Seguridad Social), dando soporte a procesos críticos de gestión pública. Seleccionado tras un bootcamp intensivo en el stack requerido.',
          en: 'Development on Natural/Adabas for the INSS (Spanish Social Security) system, supporting critical public administration processes. Selected after an intensive bootcamp in the required stack.',
        },
      ],
    },
  ],

  education: [
    {
      id: 'cidead',
      short: { es: 'IA y Big Data', en: 'AI & Big Data' },
      title: {
        es: 'Curso de Especialización en Inteligencia Artificial y Big Data',
        en: 'Specialization Course in Artificial Intelligence and Big Data',
      },
      org: 'CIDEAD',
      start: '2026',
      end: null,
    },
    {
      id: 'the-bridge',
      short: 'The Bridge',
      title: { es: 'Bootcamp AI Agentic', en: 'Agentic AI Bootcamp' },
      org: 'The Bridge',
      start: '2025-09',
      end: '2025-11',
      points: [
        {
          es: 'Ciencia de datos, machine learning, deep learning y redes neuronales, NLP, IA generativa, RAG y sistemas multiagente.',
          en: 'Data science, machine learning, deep learning and neural networks, NLP, generative AI, RAG and multi-agent systems.',
        },
      ],
    },
    {
      id: 'euroformac',
      short: 'CFGS DAW',
      title: {
        es: 'CFGS Desarrollo de Aplicaciones Web',
        en: 'Higher Vocational Diploma in Web Application Development (CFGS DAW)',
      },
      org: 'FP Euroformac',
      detail: 'Madrid',
      start: '2023',
      end: '2025',
      points: [{ es: 'Nota final: 7,78.', en: 'Final grade: 7.78/10.' }],
    },
    {
      id: 'hack-a-boss',
      short: 'Hack a Boss',
      title: { es: 'Bootcamp Desarrollo Web Full Stack', en: 'Full Stack Web Development Bootcamp' },
      org: 'Hack a Boss',
      start: '2021-02',
      end: '2021-07',
    },
    {
      id: 'torrente-ballester',
      short: 'CFGS Telecom',
      title: {
        es: 'CFGS Sistemas de Telecomunicaciones e Informática',
        en: 'Higher Vocational Diploma in Telecommunications and Computer Systems',
      },
      org: 'IES Torrente Ballester',
      detail: 'Salamanca',
      start: '2009',
      end: '2011',
    },
  ],

  skills: [
    { name: { es: 'IA aplicada', en: 'Applied AI' }, items: 'LLMs, RAG, AI Agents, Multi-agent Systems, Generative AI, Prompt Engineering' },
    { name: { es: 'Lenguajes', en: 'Programming languages' }, items: 'Python, TypeScript, JavaScript, PHP, Go, SQL, HTML, CSS' },
    { name: 'Frameworks', items: 'FastAPI, Next.js, React, Vue.js, Node.js, NestJS, Express, Symfony' },
    { name: { es: 'Datos e infraestructura', en: 'Data & infrastructure' }, items: 'PostgreSQL, MySQL, Docker, Linux, Git, REST APIs, Postman' },
    { name: { es: 'Herramientas de IA', en: 'AI tools' }, items: 'Claude Code, OpenAI Codex' },
    { name: { es: 'Metodologías', en: 'Methodologies' }, items: 'Agile, Scrum, Kanban' },
  ],

  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    {
      name: { es: 'Inglés', en: 'English' },
      level: { es: 'Intermedio (B1–B2), preparando el B2', en: 'Intermediate (B1–B2), preparing for B2' },
    },
  ],
};

// Textos fijos de la interfaz
export const labels = {
  language: { es: 'Idioma', en: 'Language' },
  savePdf: { es: 'Guardar como PDF', en: 'Save as PDF' },
  projects: { es: 'Proyectos', en: 'Projects' },
  problem: { es: 'Problema', en: 'Problem' },
  role: { es: 'Qué hice', en: 'What I did' },
  outcome: { es: 'Resultado', en: 'Outcome' },
  details: { es: 'Cómo está hecho', en: 'How it is built' },
  trajectory: { es: 'Trayectoria', en: 'Career timeline' },
  work: { es: 'Trabajo', en: 'Work' },
  study: { es: 'Formación', en: 'Education' },
  seeDetail: { es: 'Ver detalle', en: 'See details' },
  experience: { es: 'Experiencia', en: 'Experience' },
  education: { es: 'Formación', en: 'Education' },
  skills: { es: 'Habilidades', en: 'Skills' },
  languages: { es: 'Idiomas', en: 'Languages' },
} satisfies Record<string, Text>;
