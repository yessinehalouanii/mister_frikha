import { whatsappWithText } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/** Floating WhatsApp link: bottom end corner (mirrors in RTL), label only on wide screens. */
export function WhatsAppFab({ label, prefill }: { label: string; prefill: string }) {
  return (
    <a
      href={whatsappWithText(prefill)}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="fab-later fixed bottom-4 end-4 z-40 flex h-13 items-center gap-2.5 bg-graphite px-4 text-ink shadow-[inset_0_0_0_1px_var(--line-strong)] transition-colors duration-200 hover:bg-steel-2 sm:bottom-6 sm:end-6"
    >
      <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
      <span className="hidden text-small font-semibold lg:inline">{label}</span>
    </a>
  );
}
