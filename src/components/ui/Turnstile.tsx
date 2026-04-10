"use client";

import { useEffect, useRef, useCallback } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export function Turnstile({ onVerify, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const scriptLoaded = useRef(false);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: onVerify,
      "expired-callback": onExpire,
      size: "invisible",
      theme: "dark",
    });
  }, [onVerify, onExpire]);

  useEffect(() => {
    if (!SITE_KEY) return;

    if (window.turnstile) {
      renderWidget();
      return;
    }

    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = renderWidget;
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  if (!SITE_KEY) return null;

  return <div ref={containerRef} />;
}

declare global {
  interface Window {
    turnstile: {
      render: (
        container: HTMLElement,
        options: Record<string, unknown>
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}
