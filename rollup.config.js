import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
    input: './src/index.js',
    plugins: [
        resolve(),
        replace({
            'process.env.NODE_ENV': process.env.ROLLUP_WATCH ? JSON.stringify('development'): JSON.stringify('production')
        }),
        vue(),
        buble(),
    ],
    output: {
        file: './docs/js/index.js',
        format: 'iife'
    }
}
