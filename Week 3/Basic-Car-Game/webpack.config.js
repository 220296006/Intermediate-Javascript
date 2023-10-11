import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

export const mode = 'production';
export const target = 'web';
export const entry = './client/index.js';
export const watch = true;
export const output = {
    path: resolve(__dirname, 'dist/client'),
    filename: 'index.js',
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
};
export const plugins = [new HtmlWebpackPlugin({ template: './client/index.html' })];
