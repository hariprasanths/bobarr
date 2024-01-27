const host = typeof window === 'undefined' ? 'api' : window.location.hostname;
export const apiURL = process.env.WEB_UI_API_URL || `https://bobarr.ezio.cf`;
