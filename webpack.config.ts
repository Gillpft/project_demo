const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import { Configuration } from 'webpack'

const config: Configuration = {
    entry: './src/index.tsx',//入口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },//输出
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.html',
        }),
        
    ],//插件
    module: {
        rules: [
            {
                test: /\.css$/,//用于标识出应该被对应的 loader 进行转换的某个或某些文件。
                use: [
                    'style-loader',
                    'css-loader'
                ]//表示进行转换时，应该使用哪个 loader。
            },//loder
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }


        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
} 
module.exports = config