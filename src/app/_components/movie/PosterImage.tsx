// components/PosterImage.tsx
"use client";

import Image from "next/image";
import { getPosterUrl, PosterSize } from "@/libs/tmdb";

const WIDTH_MAP: Record<PosterSize, number> = {
  w92: 92,
  w154: 154,
  w185: 185,
  w342: 342,
  w500: 500,
  w780: 780,
  original: 500, // original은 실제 크기를 몰라서 기본값 지정
};

type Props = {
  posterPath: string | null;
  size?: PosterSize;
  alt?: string;
  className?: string;
  fill?: boolean;
  isMoviePoster?: boolean;
};

export default function PosterImage({
  posterPath,
  size = "w500",
  alt = "Movie poster",
  className,
  fill = false,
  isMoviePoster = false,
}: Props) {
  // poster_path가 null이면 대체 뷰 표시
  if (!posterPath) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={{ aspectRatio: "2 / 3" }}
      >
        No Image
      </div>
    );
  }

  const width = WIDTH_MAP[size] ?? 500;
  const height = Math.round(width * 1.5); // 2:3 비율

  // 영화 포스터인 경우에만 getPosterUrl 사용, 아니면 posterPath 그대로 사용
  const imageSrc = isMoviePoster ? getPosterUrl(posterPath, size) : posterPath;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      placeholder="empty"
      className={className}
    />
  );
}
