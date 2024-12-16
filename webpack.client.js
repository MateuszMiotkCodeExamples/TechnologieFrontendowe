const path = require('path');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'build/public'),
        filename: 'client.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};