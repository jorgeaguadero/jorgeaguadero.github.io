import type { Lang } from '../types';

const MONTHS = {
  es: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const PRESENT = { es: 'actualidad', en: 'present' };

const UNITS = {
  es: { year: ['año', 'años'], month: ['mes', 'meses'], separator: ' y ' },
  en: { year: ['year', 'years'], month: ['month', 'months'], separator: ', ' },
};

// '2025-09' -> { year: 2025, month: 9 }; '2025' -> { year: 2025, month: null }
function parse(date: string) {
  const [year, month] = date.split('-').map(Number);
  return { year, month: month ?? null };
}

// Fecha como número de meses: así se pueden restar directamente.
// Si solo hay año, cuenta como enero.
export function toMonth(date: string): number {
  const { year, month } = parse(date);
  return year * 12 + (month ?? 1) - 1;
}

export function currentMonth(): number {
  const now = new Date();
  return now.getFullYear() * 12 + now.getMonth();
}

// Dónde se corta una barra del cronograma. Con mes, el propio mes es el punto
// de corte: un puesto que acaba en agosto y otro que empieza en agosto quedan
// pegados sin solaparse. Con solo año, enero del año siguiente.
export function endMonth(end: string | null): number {
  if (end === null) return currentMonth() + 1;
  const { year, month } = parse(end);
  return month === null ? (year + 1) * 12 : year * 12 + month - 1;
}

export function formatDate(date: string, lang: Lang): string {
  const { year, month } = parse(date);
  return month === null ? String(year) : `${MONTHS[lang][month - 1]} ${year}`;
}

export function formatRange(start: string, end: string | null, lang: Lang): string {
  return `${formatDate(start, lang)} – ${end === null ? PRESENT[lang] : formatDate(end, lang)}`;
}

// Cuenta el mes de inicio y el de fin: de enero a agosto son 8 meses.
// Si alguna fecha no tiene mes, no se puede calcular y devuelve null.
export function duration(start: string, end: string | null, lang: Lang): string | null {
  if (parse(start).month === null || (end !== null && parse(end).month === null)) return null;

  const last = end === null ? currentMonth() : toMonth(end);
  const total = last - toMonth(start) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;

  const units = UNITS[lang];
  const plural = (n: number, [one, many]: string[]) => `${n} ${n === 1 ? one : many}`;
  const parts = [];
  if (years > 0) parts.push(plural(years, units.year));
  if (months > 0) parts.push(plural(months, units.month));
  return parts.join(units.separator);
}
