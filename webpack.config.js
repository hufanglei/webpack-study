//这个配置文件，其实即使一个js文件。通过node中的模块操作，向外暴露了一个配置对象
const path = require('path')
const webpack = require('webpack')
module.exports={
    entry: path.join(__dirname,'./src/main.js'),//入口，表示要使用webpack打包哪个文件
    // entry: './src/main.js',//新语法: 入口，表示要使用webpack打包哪个文件
    output: {
        //输出文件相关的配置
        path: path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
        // path: path.resolve(__dirname,'dist'),//新语法 指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' //这里指定 输出的文件的名称
    },
    devServer: {//这是配置dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        // webpack-dev-server --open --port 3000 --contentBase src --hot
        open: true, //自动打开浏览器
        port: 3000,//设置启动时候的运行端口
        contentBase: 'src', //指定托管的根目录
        hot: true //启用热更新 的 第1步
    },
    plugins: [//配置插件中的节点
        new webpack.HotModuleReplacementPlugin()// new 一个热更新的模块对象
    ]
};