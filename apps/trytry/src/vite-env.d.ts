/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly STORYBOOK: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
