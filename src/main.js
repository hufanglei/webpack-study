//main.js是我们项目中的js的入口文件
//导入jquery
// import * from ** 是es6中导入模块的方式
//由于es6的代码。太高级了。浏览器解析不了，所以这一行执行会报错
import $ from 'jquery'

// const $ = require('jquery') node导入方式
$(function () {
    $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634';
    });
})

//经过刚才的演示，webpack可以做什么事情???
//1.webpack 能够处理js 文件中的相互依赖关系
//2.webpack能够处理js的兼容问题，吧高级的浏览器不识别的语法，转为低级的，浏览器能识别的语法
//语法 webpack 要打包的文件的路径 -o 打包好的输出文件的路劲
//webpack .\src\main.js -o .\dist\bundle.js
