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
            template: 'public/index.html', 
            filename: 'Test01.html', 
            title: 'Test01标题', 
            chunks: ['chunk-vendors', 'chunk-common', 'Test01']
        }, 
        Test02: { 
            entry: 'src/pages/page2/main.js', 
            template: 'public/index.html',
            filename: 'Test02.html', 
            title: 'Test02标题',
            chunks: ['chunk-vendors', 'chunk-common', 'Test02']
        },  
        Test03: { 
           entry: 'src/pages/page3/main.js', 
           template: 'public/index.html',
           filename: 'Test03.html', 
           title: 'Test03标题',
           chunks: ['chunk-vendors', 'chunk-common', 'Test03']
       }, 
       Test04: {
          entry: 'src/pages/page4/main.js', 
          template: 'public/index.html',
          filename: 'Test04.html', 
          title: 'Test04标题',
          chunks: ['chunk-vendors', 'chunk-common', 'Test04']
      }, 
      Test05: {
         entry: 'src/pages/page5/main.js', 
         template: 'public/index.html',
         filename: 'Test05.html', 
         title: 'Test05标题',
         chunks: ['chunk-vendors', 'chunk-common', 'Test05']
     },
    }
}
 