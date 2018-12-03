import buble from 'rollup-plugin-buble';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';

import path from 'path';

export default {
    input: './src/index.js',
    plugins: [
        alias({
            resolve: ['js', 'vue'],
            '@components': path.resolve(__dirname, 'src/components'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            axios: path.resolve(__dirname, 'node_modules/axios/dist/axios.js')
        }),
        resolve({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
            extensions: [ '.js' ]
        }),
        replace({
            'process.env.NODE_ENV': process.env.ROLLUP_WATCH ? JSON.stringify('development'): JSON.stringify('production')
        }),
        vue(),
        buble({
            objectAssign: 'Object.assign'
        }),
    ],
    output: {
        file: './dist/js/index.js',
        format: 'iife'
    }
}
