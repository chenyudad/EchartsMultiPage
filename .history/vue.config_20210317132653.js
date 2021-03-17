module.exports={
    publicPath:'./',
    lintOnSave: false, 
    devServer: { 
        overlay: { 
            warning: false, 
            errors: false 
        }
    },
    productionSourceMap: false,
    pages: {
        Test01: {
            entry: 'src/pages/page1/main.js', 
            template: 'public/Test01.html', 
            filename: 'Test01.html', 
            title: 'Test01 page', 
            chunks: ['chunk-vendors', 'chunk-common', 'Test01']
        }, 
        Test02: { 
            entry: 'src/pages/page2/main.js', 
            template: 'public/Test02.html', 
            filename: 'Test02.html', 
            title: 'Test02 page',
            chunks: ['chunk-vendors', 'chunk-common', 'Test02']
        },
    }
} 