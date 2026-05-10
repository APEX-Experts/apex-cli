import { NextRequest, NextResponse } from "next/server";

function createContentSecurityPolicy(nonce: string) {
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'strict-dynamic' https://challenges.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com;
    frame-src 'self' https://challenges.cloudflare.com;
    connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://analytics.google.com https://www.google.com https://stats.g.doubleclick.net https://google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: cdn.simpleicons.org www.transparenttextures.com grainy-gradients.vercel.app https://www.google-analytics.com https://www.googletagmanager.com;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  return csp.replace(/\s{2,}/g, " ").trim();
}

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const contentSecurityPolicy = createContentSecurityPolicy(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicy);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", contentSecurityPolicy);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
