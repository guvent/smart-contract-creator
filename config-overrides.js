const webpack = require('webpack');

module.exports = function override(webpackConfig) {
    // Disable resolving ESM paths as fully specified.
    // See: https://github.com/webpack/webpack/issues/11467#issuecomment-691873586
    webpackConfig.module.rules.push({
        test: /\.m?js/,
        resolve: {
            fullySpecified: false,
        },
    });

    // Ignore source map warnings from node_modules.
    // See: https://github.com/facebook/create-react-app/pull/11752
    webpackConfig.ignoreWarnings = [/Failed to parse source map/];

    // Polyfill Buffer.
    webpackConfig.plugins.push(
        new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'] }),
    );

    // Polyfill other modules.
    webpackConfig.resolve.fallback = {
        crypto: false,
        stream: false,
        util: false,
        assert: false,
        fs: false,
        process: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        url: false
    };

    return webpackConfig;
};