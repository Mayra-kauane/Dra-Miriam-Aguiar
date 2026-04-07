import { HeaderWhatsAppIcon } from "../layout/Header";

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/554833693265"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose-500 to-brand-rose-400 text-white shadow-[0_18px_36px_rgba(201,131,136,0.32)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(201,131,136,0.38)]"
    >
      <HeaderWhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
