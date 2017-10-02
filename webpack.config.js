const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require("path");
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const glob = require('glob');
const BrowserSyncPlugin       = require('browser-sync-webpack-plugin');

const buildPath = '/docs/video/';

const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = [
    'style-loader',
    'css-loader?url=false',
    'sass-loader',
    'import-glob-loader',
];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                            require('precss'),
                            require('autoprefixer')
                            ];
                        }
                    }
            },
            {
                loader: 'sass-loader'
            },
            {
                loader: 'import-glob-loader'
            }
        ],
        publicPath: '../'
})
const cssConfig = isProd ? cssProd : cssDev;

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
    entry: {
        app: './src/app.js',
        bootstrap: bootstrapConfig
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.mp4$/,
                use: [
                    'file-loader?name=videos/[name].[ext]',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
               test: /\.(png|svg|jp?g|gif|ttf|eot)$/i, 
                use: [
                    'file-loader?name=images/[name].[ext]',
                ]
            },
            { test: /\.(woff2?)$/, use: 'url-loader?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },
    // devServer: {
    //     contentBase: path.join(__dirname, "docs"),
    //     compress: true,
    //     hot: true,
    //     open: true,
    //     // stats: 'errors-only'
    // },
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'nyu-landing.dev',
            port: 4444,
            files: [
                '**/*.index'
            ],
            ghostMode: {
                clicks: false,
                location: false,
                forms: false,
                scroll: false
            },
            injectChanges: true,
            logFileChanges: true,
            logLevel: 'debug',
            logPrefix: 'wepback',
            notify: true,
            reloadDelay: 0
        }),
        new HtmlWebpackPlugin({
            title: 'NYU Tandon Landing',
            hash: false,
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: './css/[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Popper: ['popper.js', 'default'],
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        })
    ]
}
