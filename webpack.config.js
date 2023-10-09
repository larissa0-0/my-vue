const path = require('path');

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.ts', //打包的入口
    // 设置打包的出口
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true // 每次打包会清除之前的代码
    },
    // 设置别名
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: ['.vue', '.js', '.ts']
    },
    // 添加模块
    module: {
        rules: [
            {// 设置.vue文件的解析规则
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {// 设置css的解析规则
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {// 设置加载图片资源的规则
                test:/\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {// 添加解析less的规则
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            },
            {// 添加解析ts的规则
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options:{
                    appendTsSuffixTo:[/\.vue$/],
                }
            },
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html', // 配置输出后的html文件名（可携带目录）
            template:'./public/index.html' // 配置模板
        })
    ],
    // 配置webpack-dev-server 将dist下的目录代理到web server
    devServer: {
        static: './dist'
    }
}