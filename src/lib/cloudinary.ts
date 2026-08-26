export function getOptimizedCloudinaryUrl(url: string, width?: number): string {
  if (!url || !url.includes('cloudinary.com')) return url;

  // Don't apply image transforms to videos
  if (url.includes('/video/upload/')) {
    return url.replace('/video/upload/', '/video/upload/f_auto,q_auto/');
  }

  // Inject transformations right after /image/upload/
  const transform = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return url.replace('/image/upload/', `/image/upload/${transform}/`);
}

export function getSrcSet(url: string): string | undefined {
  if (!url || !url.includes('cloudinary.com') || url.includes('/video/upload/')) return undefined;

  const widths = [400, 800, 1200, 1600];
  return widths
    .map((w) => `${getOptimizedCloudinaryUrl(url, w)} ${w}w`)
    .join(', ');
}
