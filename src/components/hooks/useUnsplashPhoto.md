# 📸 Unsplash API Implementation Guide

This project uses a layered architecture to fetch, cache, and display images from the Unsplash API while strictly adhering to **Rate Limiting** (50 requests/hour) guidelines.

---

## 📂 Project Structure

```text
src/
├── services/
│   └── unsplashImageFetchService.ts  # Raw API logic
├── hooks/
│   └── useUnsplashPhoto.ts           # Caching & State logic
└── components/
    └── ProductSelector.tsx           # UI Implementation

```

---

## 🔐 1. Setup & Security

### Environment Variables

To avoid leaking your API key on GitHub, use a `.env` file. **Vite** requires the `VITE_` prefix.

```text
# .env
VITE_UNSPLASH_ACCESS_KEY=your_actual_access_key_here

```

### Git Safety

Ensure your `.gitignore` includes `.env` so your keys are never pushed to a public repository.

---

## 🛠 2. The Service Layer (`services/`)

This file handles the communication with Unsplash. It is decoupled from React so it can be tested independently.

```typescript
// src/services/unsplashImageFetchService.ts
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchRandomUnsplashPhoto = async (): Promise<string> => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Unsplash API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.urls.small_s3; // Uses optimized AWS S3 links for performance
};

```

---

## 🪝 3. The Custom Hook (`hooks/`)

This hook manages **Rate Limiting**. It checks `localStorage` before making a network request.

```typescript
// src/hooks/useUnsplashPhoto.ts
import { useState, useEffect } from 'react';
import { fetchRandomUnsplashPhoto } from '../services/unsplashImageFetchService';

export const useUnsplashPhoto = (cacheKey: string) => {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPhoto = async () => {
      // 1. Check local storage to save API credits
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        setPhotoUrl(cached);
        setLoading(false);
        return;
      }

      // 2. Only fetch if cache is empty
      try {
        const url = await fetchRandomUnsplashPhoto();
        localStorage.setItem(cacheKey, url);
        setPhotoUrl(url);
      } catch (error) {
        console.error("Unsplash Hook Error:", error);
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

```

---

## 🖼 4. Component Usage

To use the image in any component, simply call the hook with a **unique cache key**.

```tsx
import { useUnsplashPhoto } from '../hooks/useUnsplashPhoto';

const ProductSelector = () => {
  const { photoUrl, loading, refresh } = useUnsplashPhoto('product_selector_image');

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-card">
      <img src={photoUrl} alt="Random Product" />
      <button onClick={refresh}>Get New Image</button>
    </div>
  );
};

```

---

## ⚖️ API Usage Rules (The "Don't Get Banned" List)

1. **Unique Keys**: Always use a unique `cacheKey` (e.g., `hero_cache`, `sidebar_cache`) so components don't overwrite each other.
2. **The 50 Request Limit**: In "Demo Mode," you have 50 requests per hour. **Each refresh while the cache is empty counts as 1 request.**
3. **Strict Mode**: In development, React Strict Mode fires the hook **twice**. This uses 2 credits per refresh. This is normal but be mindful.
4. **Monitoring**: Open **DevTools > Network**, click the `random` request, and find `x-ratelimit-remaining` to see your live credit balance.

---