// GitHub's configure-pages action supplies /repository or an empty root path.
const configured=(process.env.BASE_PATH||'').replace(/^\/+|\/+$/g,'');
export const basePath=configured?`/${configured}/`:'/';
