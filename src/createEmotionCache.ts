import createCache from '@emotion/cache';

// prepend ensures MUI styles load first so that other styles can override
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
