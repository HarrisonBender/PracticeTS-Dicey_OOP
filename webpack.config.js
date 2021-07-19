const path = require('path');

module.exports = {
    mode: 'development',
    entry: './hello.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js')
    }
};