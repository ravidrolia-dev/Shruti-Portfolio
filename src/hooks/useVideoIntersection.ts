import { useEffect, useRef } from 'react';

export const useVideoIntersection = (threshold = 0.5, fadeDurationMs = 500) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    const fadeAudio = (targetVolume: number, onComplete?: () => void) => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      const steps = 20;
      const stepTime = fadeDurationMs / steps;
      const currentVolume = video.volume;
      const volumeStep = (targetVolume - currentVolume) / steps;

      fadeIntervalRef.current = window.setInterval(() => {
        let newVolume = video.volume + volumeStep;
        
        // Clamp volume between 0 and 1
        if (newVolume > 1) newVolume = 1;
        if (newVolume < 0) newVolume = 0;
        
        video.volume = newVolume;

        // Check if we reached the target volume
        if ((volumeStep > 0 && newVolume >= targetVolume) || 
            (volumeStep < 0 && newVolume <= targetVolume) ||
            volumeStep === 0) {
          if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
          }
          video.volume = targetVolume;
          if (onComplete) onComplete();
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.paused) {
              video.volume = 0;
              video.play().then(() => {
                fadeAudio(1);
              }).catch((err) => {
                console.warn("Video playback was prevented by the browser:", err);
              });
            } else {
              fadeAudio(1);
            }
          } else {
            fadeAudio(0, () => {
              video.pause();
            });
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, [threshold, fadeDurationMs]);

  return { containerRef, videoRef };
};
