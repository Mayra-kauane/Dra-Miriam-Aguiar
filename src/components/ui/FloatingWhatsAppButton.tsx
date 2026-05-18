import { HeaderWhatsAppIcon } from "../layout/Header";
import { trackWhatsAppClick } from "../../lib/analytics";

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/554833693265?text=Ol%C3%A1%2C%20vim%20do%20google%20e%20gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.%20Miriam"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-rose-500 text-white shadow-[0_18px_36px_rgba(167,100,98,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-rose-400"
      onClick={trackWhatsAppClick}
    >
      <HeaderWhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
