import { useState, useEffect } from 'react';
import { fetchRandomUnsplashPhoto } from './../services/unspashImageFetchService';

export const useUnsplashPhoto = (cacheKey: string) => {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPhoto = async () => {
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        setPhotoUrl(cached);
        setLoading(false);
        return;
      }

      try {
        const url = await fetchRandomUnsplashPhoto();
        localStorage.setItem(cacheKey, url);
        setPhotoUrl(url);
      } catch (error) {
        console.error("Hook Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPhoto();
  }, [cacheKey]);

  const refresh = () => {
    localStorage.removeItem(cacheKey);
    window.location.reload();
  };

  return { photoUrl, loading, refresh };
};