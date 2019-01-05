//main.js是我们项目中的js的入口文件
//导入jquery
// import * from ** 是es6中导入模块的方式
//由于es6的代码。太高级了。浏览器解析不了，所以这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery') node导入方式

//使用import语法，导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
//注意: webpack,默认只能打包处理js类型的文件,无法处理其他的费js类型的文件
//如果要处理 非js类型的文件，我们需要手动安装一些合适第三方loader加载器
//1. 如果想要打包处理css文件，需要安装 cnpm i style-loader css-loader -D
//2.打开 webpack.config.js这个配置文件，在里面，新增一个配置节点，叫做module，他是
//一个对象，在这个module对象身上，有个rules 属性，这个rules 属性是个数组，这个组织中，存放了
//所有第三方文件的 匹配 和处理规则

//注意: webpack 处理第三方文件类型的过程
//1. 发现这个 要处理的文件不是js文件，然后就去 配置文件中，查找有么有对应的第三方loader规则
//2.如果能够找到对应的规则，就会调用 对应的loader处理这种文件类型
//3. 在调用loader的时候，是从头往前调用的
//4. 当最后的一个loader 调用完毕，会把处理的结果，直接交给webpack进行 打包合并，最终输出打包到bundle.js中去


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



//使用webpack-dev-server 这个工具来实现自动打包编译的功能
//1.运行 npm i webpack-dev-server -D 吧这个工具安装到项目的本地开发依赖
//2.安装完毕后，这个工具的用法，和webpack命令的用法，完全一样
//webpack-dev-server这个工具，本地项目中想要用，必须安装webpack到本地
//"webpack-cli": "^3.2.0",
//cnpm i webpack@2.9.7 -D
//直接托管到了电脑的内存中，所以 我们在项目根目录中，根本找不到这个打包好的bundle.ks
//我们可以认为，webpack-dev-server 吧打包好的文件，以一种虚拟的形式，托管到了
//我们项目中的根目录中，虽然我们看不到他，但是我们可以认为
//和dist src node_moucle平级


