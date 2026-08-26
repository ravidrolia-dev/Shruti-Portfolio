import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isVideo = (url: string | undefined | null) => {
  if (!url) return false;
  return /\.(mp4|webm|mov)$/i.test(url) || url.includes('/video/upload/');
};
