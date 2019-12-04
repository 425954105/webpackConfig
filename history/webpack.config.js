const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 3000,
        progress: true,
        contentBase: "./src",
        compress: true
    },
    mode: 'development',
    entry: './src',
    output: {
        // filename: 'bundle.js.[hash:8]',
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [{
                    loader: 'style-loader'
                }, 'css-loader']
            }
        ]
    }
}