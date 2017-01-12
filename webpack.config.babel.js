export default {
    entry: {
        'react-then-else': './test/src/index.js',
    },
    output: {
        path: 'test',
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    }
}
