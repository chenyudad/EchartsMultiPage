module.exports={
    publicPath:'./',
    lintOnSave: false, 
    devServer: { 
        overlay: { 
            warning: false, 
            errors: false 
        }
    },
    pages: {
        Test01: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pages/page1/Test01.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/Test01.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'Test01.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Test01 page',

            // 包含的模块，可选项
            chunks: ['Test01']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        Test02: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pages/page2/Test02.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/Test02.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'Test02.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Test02 page',

            // 包含的模块，可选项
            chunks: ['App', 'Test02']
        },
    }
} 