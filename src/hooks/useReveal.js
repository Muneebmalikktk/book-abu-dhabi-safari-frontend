import { useEffect, useRef, useState } from "react";

/** Fade/slide in once the element enters the viewport. */

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
        ...options,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default useReveal;