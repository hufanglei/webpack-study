//这个配置文件，其实即使一个js文件。通过node中的模块操作，向外暴露了一个配置对象
const path = require('path');
module.exports={
    entry: path.join(__dirname,'./src/main.js'),//入口，表示要使用webpack打包哪个文件
    // entry: './src/main.js',//新语法: 入口，表示要使用webpack打包哪个文件
    output: {
        //输出文件相关的配置
        path: path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
        // path: path.resolve(__dirname,'dist'),//新语法 指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js' //这里指定 输出的文件的名称
    }
};