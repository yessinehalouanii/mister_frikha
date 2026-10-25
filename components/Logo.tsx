import { SIM_LETTERS } from "@/lib/logo-paths";

/** The SIM mark, rebuilt as vector from the original logo. */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 748 748"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <circle cx="374" cy="374" r="370" fill="#fff" />
      <circle cx="374" cy="374" r="362.5" fill="none" stroke="#475EA4" strokeWidth="8" />
      <circle cx="374" cy="374" r="315" fill="none" stroke="#2F67BA" strokeWidth="42" />
      <path
        d="M174 200.1A265 265 0 0 1 574 200.1M174 547.9A265 265 0 0 0 574 547.9"
        fill="none"
        stroke="#475EA4"
        strokeWidth="15"
      />
      <path d={SIM_LETTERS} fill="#2F67BA" />
    </svg>
  );
}

/** The same mark split into drawable parts for the intro animation. */
export function LogoMarkAnimated() {
  return (
    <svg viewBox="0 0 748 748" aria-hidden="true">
      <circle className="ring ring-1" pathLength={1} cx="374" cy="374" r="362.5" fill="none" stroke="#6E86C9" strokeWidth="8" transform="rotate(-90 374 374)" />
      <circle className="ring ring-2" pathLength={1} cx="374" cy="374" r="315" fill="none" stroke="#2F67BA" strokeWidth="42" transform="rotate(-90 374 374)" />
      <path className="ring ring-3" pathLength={1} d="M174 200.1A265 265 0 0 1 574 200.1M174 547.9A265 265 0 0 0 574 547.9" fill="none" stroke="#6E86C9" strokeWidth="15" />
      <path className="letters" d={SIM_LETTERS} fill="#EEF1F4" />
    </svg>
  );
}
