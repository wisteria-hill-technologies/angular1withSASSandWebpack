var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'bootstrap-loader',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js', '.scss']
    },
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
          test: /\.(png|jpg|svg)$/,
          loader: 'url?limit=5000000'
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url?limit=10000'
        },
        {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        }
        ]
    }
};
