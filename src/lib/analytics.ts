declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function trackWhatsAppClick() {
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click");
  }
}
