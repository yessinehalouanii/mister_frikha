import { LogoMarkAnimated } from "./Logo";

/**
 * Runs in <head> before first paint. The intro plays once per browser session and never
 * with reduced motion; the flag is set immediately, so a reload or a navigation never replays it.
 */
export const INTRO_HEAD_SCRIPT = `try{var d=document.documentElement;if(!sessionStorage.getItem("sim-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("intro");sessionStorage.setItem("sim-intro","1");setTimeout(function(){d.classList.remove("intro")},1300)}}catch(e){}`;

// Click, tap or any key skips the intro.
const SKIP_SCRIPT = `(function(){var d=document.documentElement;if(!d.classList.contains("intro"))return;function s(){d.classList.remove("intro");removeEventListener("keydown",s);removeEventListener("pointerdown",s)}addEventListener("keydown",s);addEventListener("pointerdown",s)})();`;

/** Pure CSS/SVG overlay; the page is fully rendered underneath it. */
export function LogoIntro() {
  return (
    <>
      <div className="intro-overlay" aria-hidden="true">
        <LogoMarkAnimated />
      </div>
      <script dangerouslySetInnerHTML={{ __html: SKIP_SCRIPT }} />
    </>
  );
}
