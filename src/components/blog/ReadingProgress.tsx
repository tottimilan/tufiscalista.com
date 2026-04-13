"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const el = document.getElementById("article-body");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight;
      const progress = Math.min(
        100,
        Math.max(0, ((window.scrollY - el.offsetTop) / (total - window.innerHeight)) * 100),
      );
      if (rect.bottom < 0) setWidth(100);
      else setWidth(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (width <= 0) return null;

  return <div className="reading-progress" style={{ width: `${width}%` }} />;
}
