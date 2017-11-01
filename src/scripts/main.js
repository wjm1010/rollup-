// 导入样式
import '../styles/main.css';
// 导入模块进行测试
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

//输入日志记录器，以便进行的调试
import debug from 'debug';
const log = debug('app:log');
// 如果我们不生产，记录器应该被禁用
if (ENV !== 'production') {
  debug.enable('*');
  log('Logging is enabled!');
  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}else {
  debug.disable();
}

// 导入模块中运行一些函数。
const result1 = sayHelloTo('Jason');
const result2 = addArray([1, 2, 3, 4]);

// 将结果打印在页面上.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
