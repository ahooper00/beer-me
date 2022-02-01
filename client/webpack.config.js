module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    },
    resolve:
    {
        mainFields: ['browser', 'main', 'module'],
        extensions:
            ['.wasm', '.mjs', '.js', '.jsx', '.json']
    },
}