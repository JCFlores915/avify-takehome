const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        context: path.resolve(__dirname, 'src'),
        target: 'web',
        entry: {
            app: ['./index.tsx']
        },
        output: {
            filename: '[name]-[contenthash:6].bundle.js',
            path: path.join(__dirname, './build/www'),
            publicPath: isProd ? '/' : 'http://localhost:8080/'
        },
        resolve: {
            mainFields: ['browser', 'module', 'main'],
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test: /\.([jt])s(x?)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: 'file-loader?name=img/[name]-[contenthash:6].[ext]',
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name]-[contenthash:6].css',
                chunkFilename: '[id].css'
            })
        ],
        devServer: {
            port: 8080,
            host: 'localhost',
            static: path.resolve(__dirname, 'src')
        },
    };
};
