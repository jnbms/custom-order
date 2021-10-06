const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,"frontend","index.tsx"),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions : [".js",".ts",".tsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"frontend","index.html"),
            inject: "body",
            minify: true,
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname,"frontend")
        },
        compress: true,
        port: 3000,
    }

}