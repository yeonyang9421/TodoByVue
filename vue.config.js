module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/TodoByVue/' : '/',
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                // target: 'https://friendlychat-e6e4a.firebaseio.com/',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    },

}