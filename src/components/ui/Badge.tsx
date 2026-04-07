import type { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-ink/10 bg-white/70 px-4 py-2.5 text-sm text-brand-ink/75">
      <span className="h-2.5 w-2.5 rounded-full bg-brand-rose-500" />
      {children}
    </span>
  );
}
