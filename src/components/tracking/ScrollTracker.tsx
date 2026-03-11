"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking";

export function ScrollTracker() {
  const tracked50 = useRef(false);
  const tracked90 = useRef(false);

  useEffect(() => {
    function onScroll() {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent >= 50 && !tracked50.current) {
        tracked50.current = true;
        trackEvent("scroll_50");
      }

      if (scrollPercent >= 90 && !tracked90.current) {
        tracked90.current = true;
        trackEvent("scroll_90");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
