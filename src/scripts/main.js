// 导入模块进行测试
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

//输入日志记录器，以便进行更简单的调试
import debug from 'debug';
const log = debug('app:log');
// 如果我们不生产，记录器只应该被禁用
if (ENV !== 'production') {
  debug.enable('*');
  log('Logging is enabled!');
}else {
  debug.disable();
}

// 从导入的模块中运行一些函数。
const result1 = sayHelloTo('Jason');
const result2 = addArray([1, 2, 3, 4]);

// 将结果打印在页面上.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
