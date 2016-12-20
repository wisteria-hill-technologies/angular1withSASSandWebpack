var webpack = require('webpack');
module.exports = {
    entry: [
      "bootstrap-loader",
      "./src"
    ],
    output: {
        path: "./build",
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
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.html$/,
            loader: 'raw'
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
                'style',
                // 'style-loader',
                // 'css-loader',
                // 'resolve-url-loader',
                // 'sass-loader',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer : {
      port: 3000,
      contentBase: './build',
      inline: true
    }
};
