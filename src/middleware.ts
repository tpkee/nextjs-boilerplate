import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export default function defaultMiddleware(req: NextRequest) {
    return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};