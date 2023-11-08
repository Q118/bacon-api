import { defineConfig } from 'vitest/config'

// PICKUP: once needed use this and then add to the script in package.json:  --config tests/vitest.config.json

export default defineConfig({
    test: {
        // ...
        globals: true,

    },
})