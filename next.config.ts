import type { NextConfig } from "next";

// CSP em modo Report-Only: NÃO bloqueia nada, só registra violações no console
// do navegador. É o passo seguro — depois de validar que GA4/Supabase/fonts não
// disparam violações, trocar a chave para "Content-Security-Policy" (sem -Report-Only)
// para passar a bloquear de verdade.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.google-analytics.com https://www.google-analytics.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://*.google-analytics.com https://www.googletagmanager.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // HSTS sem includeSubDomains/preload de propósito: não força HTTPS nos
  // subdomínios (ex.: mail.) — evita qualquer surpresa enquanto mexemos no e-mail.
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Content-Security-Policy-Report-Only", value: csp },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "solcenter.com.br" }],
        destination: "https://www.solcenter.com.br/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
