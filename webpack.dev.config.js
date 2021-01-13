const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './react/index.js')
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "react"),
                use: 'babel-loader',
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
