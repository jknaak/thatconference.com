import { sequence } from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://857800ed593d481bb0da2843516d7845@o235190.ingest.sentry.io/4504617287417856',
	tracesSampleRate: 1
});

export const handleError = Sentry.handleErrorWithSentry();
export const handle = sequence(Sentry.sentryHandle());
