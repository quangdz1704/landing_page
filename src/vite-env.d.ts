/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_CONTENT_TEXT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// use env: import.meta.env.VITE_CONTENT_TEXT
