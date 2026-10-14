/** Public files and embedded app screens share the deployment's base path. */
export const siteUrl=(path='')=>`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
