const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './react/index.tsx'),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "react"),
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        historyApiFallback: true,
        hot: true,
    },
};
