const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './react/index.tsx')
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "react"),
                use: 'ts-loader',
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
    },
};
