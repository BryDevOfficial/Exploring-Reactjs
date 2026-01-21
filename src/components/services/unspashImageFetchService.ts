// src/services/unsplashImageFetchService.ts

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

/**
 * Fetches a random photo URL from Unsplash.
 * Does not handle caching; just the raw API call.
 */
export const fetchRandomUnsplashPhoto = async (): Promise<string> => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Unsplash API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.urls.small_s3;
};