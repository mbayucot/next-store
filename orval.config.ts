// orval.config.ts
import { defineConfig } from 'orval';

export default defineConfig({
    store: {
        output: {
            mode: 'tags-split',
            target: 'generated/store.ts',
            client: 'react-query',
            //mock: true,
        },
        input: {
            target: './openapi.yaml',
        },
    },
});
