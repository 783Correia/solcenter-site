import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado! — Solcenter Energia Solar",
  description: "Recebemos seu contato. Um consultor vai te atender em instantes.",
  robots: { index: false, follow: false },
};

export default function ObrigadoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
