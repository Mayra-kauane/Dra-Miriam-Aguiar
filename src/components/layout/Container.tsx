import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-[min(1120px,calc(100vw-32px))] ${className}`.trim()}>
      {children}
    </div>
  );
}
