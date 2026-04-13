"use client";

import { useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);

  if (items.length < 2) return null;

  return (
    <nav className="my-8 rounded-lg border border-[#e0dcd4] bg-[#f7f5f0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <span className="text-sm font-semibold text-[#1a1a1a] tracking-wide uppercase">
          Contenido del artículo
        </span>
        <span className="text-[#C8A977] text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <ol className="px-5 pb-4 space-y-1.5 list-none">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-start gap-2.5 text-sm text-[#5a5a5a] hover:text-[#b08d4c] transition-colors leading-snug py-0.5"
              >
                <span className="text-[#C8A977] font-semibold text-xs mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
