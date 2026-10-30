import type { Lang, Text } from '../types';

export function t(text: Text, lang: Lang): string {
  return typeof text === 'string' ? text : text[lang];
}
