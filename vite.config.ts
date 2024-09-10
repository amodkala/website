import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react-swc'
import rehypeHighlight from 'rehype-highlight'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        mdx({
            rehypePlugins: [
                [rehypeHighlight, { detect: true, ignoreMissing: true }]
            ]
        }),
        react(),
    ],
})
