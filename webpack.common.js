module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional setting, this will reference .babelrc
                    loader: "babel-loader"
                }
            },
            // {
            //     test: /\.html$/i,
            //     use: ["html-loader"]
            // },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            }
        ]
    },
    // target: "web",
    devtool: 'source-map',
    // devServer: {
    //    contentBse: '.dist'
    // }
};