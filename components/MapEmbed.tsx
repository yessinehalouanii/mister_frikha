"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The Google Maps embed costs ~400 KB of script, so it mounts only when its frame is
 * about to scroll into view (Chrome's native iframe lazy-loading starts far earlier).
 */
export function MapEmbed({ src, title, openUrl, openLabel }: { src: string; title: string; openUrl: string; openLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure>
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden bg-steel sm:aspect-[21/9]">
      <a href={openUrl} target="_blank" rel="noopener" className="drawing-grid absolute inset-0 flex items-center justify-center p-6 text-center text-muted hover:text-ink">
        {openLabel}
      </a>
      {show && (
        <iframe
          src={src}
          title={title}
          className="relative h-full w-full border-0 grayscale-[35%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
    <figcaption className="mt-3 text-small">
      <a href={openUrl} target="_blank" rel="noopener" className="link text-muted hover:text-ink">
        {openLabel}
      </a>
    </figcaption>
    </figure>
  );
}
