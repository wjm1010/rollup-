//rollup plugins
import babel from 'rollup-plugin-babel';//es2015
import eslint from 'rollup-plugin-eslint';//代码格式
import resolve from 'rollup-plugin-node-resolve';//运行加载node_modules中的三方模块。
import commonjs from 'rollup-plugin-commonjs';//将CommonJS模块转换成ES6,防止他们在Rollup中失效
import replace from 'rollup-plugin-replace';//做了查找-替换的工作
import uglify from 'rollup-plugin-uglify';//压缩js代码



export default { 
	entry: 'src/scripts/main.js', //入口文件
	dest: 'build/js/main.min.js', //编译完的文件需要被存放的路径。
	format: 'iife', // Rollup支持多种输出格式。因为我们要在浏览器中使用，需要使用立即执行函数表达式(IIFE)[
	sourceMap: 'inline', //调试时sourcemap是非常有用的。这个配置项会在生成文件中添加一个sourcemap
	plugins: [
		resolve({
			jsnext: true,//属性是为了帮助Node模块迁移到ES2015的一部分
			main: true,
			browser: true
		}),
		commonjs(),
		eslint({
			exclude:['src/styles/**']
		}),
		babel({
			exclude:'node_modules/**' //属性忽略node_modules目录
		}),

		//出现的ENV并且替换成process.env.NODE_ENV - 在Node应用中最普遍的设置环境变量的方法 - 或者
		//"development"中的一个.使用JSON.stringify()确保值被双引号包裹,如果ENV没有的话
		replace({
			ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
		(process.env.NODE_ENV === 'production' && uglify())
	]
	
}