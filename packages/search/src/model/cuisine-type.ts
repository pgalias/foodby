export enum Cuisines {
  ITALIAN = 'italian',
  FRENCH = 'french',
  GREEK = 'greek',
  JAPANESE = 'japanese',
  BELGIAN = 'belgian',
  POLISH = 'polish',
}
export type CuisineType = typeof Cuisines[keyof typeof Cuisines];
