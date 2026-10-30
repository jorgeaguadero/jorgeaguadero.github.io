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
    { label: 'jorgeaguadero.github.io', href: 'https://jorgeaguadero.github.io/', printOnly: true },
  ],

  projects: [
    {
      id: 'money-manager',
      title: 'Money Manager',
      org: { es: 'Proyecto personal', en: 'Personal project' },
      start: '2026-07',
      end: null,
      summary: {
        es: 'Mi renta, mis huchas y mi patrimonio en un solo sitio: una app web para quien cobra de varias fuentes y quiere saber en cada momento cuánto le tocará pagar en la renta, cuánto apartar de cada cobro y dónde está su dinero.',
        en: 'My income tax, savings pots and net worth in one place: a web app for people paid from several sources who want to know at any moment how much tax they will owe, how much to set aside from each payment and where their money is.',
      },
      problem: {
        es: 'Cobro una nómina y, además, bolos como músico, con distintas retenciones, y nunca sabía cuánto me tocaría pagar en la renta ni cuánto apartar de cada bolo. Desde 2021 lo llevaba en una hoja de cálculo: una pestaña para el IRPF, otra para lo apartado y otra con el valor de cada cuenta a fin de mes.',
        en: 'I earn a salary plus fees from gigs as a musician, each with a different withholding, and I never knew how much income tax I would owe or how much to set aside from each gig. Since 2021 I had tracked it in a spreadsheet: one tab for income tax, another for savings and another for the value of each account at month end.',
      },
      role: {
        es: 'La diseñé y construí entera: Next.js como BFF, FastAPI como fuente de verdad del dominio, PostgreSQL, y despliegue con Docker en Northflank. Cada decisión con peso tiene su documento de decisión de arquitectura (ADR) con las alternativas descartadas.',
        en: 'I designed and built all of it: Next.js as a BFF, FastAPI as the source of truth for the domain, PostgreSQL, and deployment with Docker on Northflank. Every significant decision has its own architecture decision record (ADR), including the alternatives that were ruled out.',
      },
      outcome: [
        {
          es: 'Motor de IRPF con la escala estatal y la de Castilla y León: lo que ya debo a fecha de hoy y la previsión a 31 de diciembre, con el desglose del cálculo para auditarlo. Cifras contrastadas con la AEAT para 2025.',
          en: 'Income tax engine with the national and Castilla y León brackets: what I already owe to date and the forecast at 31 December, with the full breakdown so it can be audited. Figures checked against the Spanish Tax Agency (AEAT) for 2025.',
        },
        {
          es: 'Nóminas en PDF: la app propone las cifras leyendo la capa de texto y recurre al OCR solo si es un escaneo; también por lotes.',
          en: 'Payslips in PDF: the app suggests the figures from the text layer and only falls back to OCR for scans; batch uploads too.',
        },
        {
          es: 'Huchas con reglas de reparto por fuente ("de cada bolo, el 28 % a la hucha del IRPF") que, al cobrar, proponen lo que toca apartar y dicen si vas al día.',
          en: 'Savings pots with allocation rules per income source ("28% of every gig goes to the tax pot") that suggest what to set aside on each payment and show whether you are up to date.',
        },
        {
          es: 'Unos 430 tests en el backend contra un PostgreSQL real y unos 210 en el frontend, con CI en cada push: linters, tipos estrictos, migraciones al día y auditoría de dependencias.',
          en: 'Around 430 backend tests against a real PostgreSQL and around 210 frontend tests, with CI on every push: linters, strict types, up-to-date migrations and a dependency audit.',
        },
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'OCR'],
      details: [
        {
          es: 'Next.js como BFF: el navegador nunca habla con FastAPI. Los Server Components leen, las Server Actions escriben, y el login con Google se resuelve en el servidor con una sesión en cookie httpOnly y un token opaco que emite y revoca FastAPI.',
          en: 'Next.js as a BFF: the browser never talks to FastAPI. Server Components read, Server Actions write, and Google login is handled on the server with an httpOnly cookie session and an opaque token that FastAPI issues and revokes.',
        },
        {
          es: 'El motor fiscal es código puro, sin base de datos ni HTTP, con las escalas como datos versionados y Decimal en todos los importes.',
          en: 'The tax engine is pure code, with no database or HTTP, with the brackets as versioned data and Decimal for every amount.',
        },
        {
          es: 'Tipos de punta a punta: el cliente del frontend se genera desde el OpenAPI de FastAPI; Zod valida en el frontend y Pydantic en la API.',
          en: 'End-to-end types: the frontend client is generated from the FastAPI OpenAPI spec; Zod validates on the frontend and Pydantic in the API.',
        },
        {
          es: 'PDFs, OCR y hojas de cálculo se procesan en un proceso aparte con tiempo y memoria máximos, para que un documento malicioso no tumbe el servidor.',
          en: 'PDFs, OCR and spreadsheets are processed in a separate process with time and memory limits, so a malicious document cannot take the server down.',
        },
        {
          es: 'Aislamiento entre usuarios comprobado con un barrido de miles de peticiones cruzadas: cada consulta filtra por el usuario de la sesión, nunca por un id que llegue del cliente.',
          en: 'Isolation between users verified with a sweep of thousands of cross-user requests: every query filters by the session user, never by an id sent by the client.',
        },
      ],
      image: {
        src: '/projects/money-manager.png',
        alt: {
          es: 'Panel de Money Manager con la renta a fecha de hoy y la previsión de cierre',
          en: 'Money Manager dashboard with income tax to date and the year-end forecast',
        },
      },
      caption: { es: 'Captura con datos de demostración.', en: 'Screenshot with demo data.' },
    },
    {
      id: 'rehearsal-rooms',
      title: 'Rehearsal Rooms',
      org: { es: 'Proyecto personal', en: 'Personal project' },
      start: '2025-04',
      end: '2025-06',
      repo: 'https://github.com/jorgeaguadero/Rehearsal-rooms',
      summary: {
        es: 'Aplicación web para reservar salas de ensayo: los músicos se registran, reservan y gestionan sus reservas, y los administradores gestionan usuarios y salas.',
        en: 'Web application for booking rehearsal rooms: musicians sign up, book rooms and manage their bookings, while admins manage users and rooms.',
      },
      problem: {
        es: 'Un local de ensayo tiene que cuadrar los horarios de muchos grupos en pocas salas sin que dos reservas se pisen, y alguien tiene que poder administrar salas y usuarios sin tocar la base de datos.',
        en: 'A rehearsal space has to fit many bands into a few rooms without two bookings overlapping, and someone has to be able to manage rooms and users without touching the database.',
      },
      role: {
        es: 'Full stack de principio a fin: API REST con Node.js, Express y MySQL organizada en rutas, controladores y repositorios, y frontend en React con Vite y Tailwind.',
        en: 'Full stack from start to finish: a REST API with Node.js, Express and MySQL organized into routes, controllers and repositories, and a React frontend with Vite and Tailwind.',
      },
      outcome: [
        {
          es: 'Reservas con validación de disponibilidad en tiempo real, historial y próximas reservas.',
          en: 'Bookings with real-time availability checks, history and upcoming bookings.',
        },
        {
          es: 'Autenticación con JWT y contraseñas con bcrypt, con roles de usuario y administrador.',
          en: 'JWT authentication and bcrypt-hashed passwords, with user and admin roles.',
        },
        {
          es: 'Panel de administración con paginación y buscador, y subida de imágenes de las salas.',
          en: 'Admin panel with pagination and search, and image uploads for the rooms.',
        },
      ],
      tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MySQL', 'JWT'],
      details: [
        {
          es: 'Backend en capas: las rutas solo enrutan, los controladores llevan la lógica y los repositorios son los únicos que hablan con MySQL.',
          en: 'Layered backend: routes only route, controllers hold the logic and repositories are the only ones that talk to MySQL.',
        },
        {
          es: 'La disponibilidad se comprueba en el servidor antes de guardar, no solo en el formulario: si el tramo se solapa con otra reserva activa, la API responde con un 409.',
          en: 'Availability is checked on the server before saving, not just in the form: if the slot overlaps another active booking, the API responds with a 409.',
        },
        {
          es: 'Subida de imágenes con multer y un fallback visual cuando una sala no tiene foto.',
          en: 'Image uploads with multer and a visual fallback when a room has no photo.',
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
          en: 'Custom agent orchestration with direct LLM integration, without third-party frameworks.',
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
          en: "Frontend development with React: I joined for a one-off engagement to build the application's user interface.",
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
      title: 'Bootcamp AI Agentic',
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
        en: 'Higher Technician Diploma in Web Application Development',
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
        en: 'Higher Technician Diploma in Telecommunication and Computer Systems',
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
  details: { es: 'Cómo está hecho', en: "How it's built" },
  trajectory: { es: 'Trayectoria', en: 'Career timeline' },
  work: { es: 'Trabajo', en: 'Work' },
  study: { es: 'Formación', en: 'Education' },
  seeDetail: { es: 'Ver detalle', en: 'See details' },
  experience: { es: 'Experiencia', en: 'Experience' },
  education: { es: 'Formación', en: 'Education' },
  skills: { es: 'Habilidades', en: 'Skills' },
  languages: { es: 'Idiomas', en: 'Languages' },
} satisfies Record<string, Text>;
