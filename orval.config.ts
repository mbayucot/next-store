// orval.config.ts
import { defineConfig } from 'orval';

export default defineConfig({
    store: {
        output: {
            mode: 'tags-split',
            target: 'orval/store.ts',
            schemas: 'orval/model',
            client: 'react-query',
            //mock: true,
        },
        input: {
            target: './openapi.yaml',
        },
    },
    storeZod: {
        input: {
            target: './openapi.yaml',
        },
        output: {
            mode: 'tags-split',
            client: 'zod',
            target: 'orval/gen/endpoints',
            fileExtension: '.zod.ts',
        },
    },
});
