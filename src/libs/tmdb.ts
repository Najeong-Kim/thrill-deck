export type PosterSize =
  | 'w92'
  | 'w154'
  | 'w185'
  | 'w342'
  | 'w500'
  | 'w780'
  | 'original';

export const getPosterUrl = (
  posterPath: string,
  size: PosterSize = 'w500',
) => `https://image.tmdb.org/t/p/${size}${posterPath}`;
