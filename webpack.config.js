module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "cheerioweb.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css",
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    externals: {
        "jsdom": "window",
    },
    resolve: [
      {'cheerio': 'cheerio/lib/cheerio'}
    ]
};
