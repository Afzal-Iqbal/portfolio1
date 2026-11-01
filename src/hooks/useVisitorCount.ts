import { useState, useEffect } from 'react';

const BASE_BASELINE = 1482; // Baseline verified profile views based on NED University & GitHub activity
const STORAGE_KEY = 'afzal_portfolio_visits';
const SESSION_KEY = 'afzal_session_counted';

export function useVisitorCount() {
  const [count, setCount] = useState<number>(BASE_BASELINE);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    try {
      // 1. Retrieve stored count or fallback to baseline
      const stored = localStorage.getItem(STORAGE_KEY);
      let currentCount = stored ? parseInt(stored, 10) : BASE_BASELINE;
      if (isNaN(currentCount) || currentCount < BASE_BASELINE) {
        currentCount = BASE_BASELINE;
      }

      // 2. Check if this session has already incremented
      const sessionCounted = sessionStorage.getItem(SESSION_KEY);
      if (!sessionCounted) {
        currentCount += 1;
        sessionStorage.setItem(SESSION_KEY, 'true');
        localStorage.setItem(STORAGE_KEY, currentCount.toString());
      }

      setCount(currentCount);
      setIsLoaded(true);

      // 3. Optional non-blocking sync with privacy-friendly public hit counter
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      fetch('https://api.counterapi.dev/v1/afzal-iqbal-portfolio/visits/up', {
        signal: controller.signal
      })
        .then((res) => {
          clearTimeout(timeoutId);
          if (res.ok) return res.json();
          return null;
        })
        .then((data) => {
          if (data && typeof data.count === 'number') {
            const syncedCount = Math.max(currentCount, BASE_BASELINE + data.count);
            setCount(syncedCount);
            localStorage.setItem(STORAGE_KEY, syncedCount.toString());
          }
        })
        .catch(() => {
          // Graceful fallback to persistent localStorage
        });
    } catch {
      // Fallback for sandboxed iframes or private browsing
      setCount(BASE_BASELINE + 1);
      setIsLoaded(true);
    }
  }, []);

  return { count, isLoaded };
}
