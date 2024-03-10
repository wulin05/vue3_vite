// 引入mitt(从讲解03_mitt,需要安装mitt,创建utils目录的emitter.ts文件,emitter.ts文件名可以随意)
import mitt from 'mitt'
// 调用mitt得到emitter,emitter能：绑定数据、触发事件
const emitter = mitt()

// 以下是配合main.ts中的 import emitter from './utils/emitter' , 这样在全局使用mitt
// // emitter: 可以发现有all(查看所有绑定事件)、emit(触发事件)、on(绑定事件)、off(解除绑定)
// // 绑定事件
// emitter.on('test1', () => {
//   console.log('test1被调用了')
// })
// emitter.on('test2', () => {
//   console.log('test2被调用了')
// })

// // 触发事件: 每隔1秒触发test1、test2事件
// setInterval(() => {
//   emitter.emit('test1')
//   emitter.emit('test2')
// }, 1000);

// // 解绑事件：3秒后解绑test1事件
// setTimeout(() => {
//   emitter.off('test1')
//   // emitter.all.clear() // 通过all的clear可以清空所有事件
// }, 3000);


// 暴露emitter
export default emitter

// 最后到main.ts中去引入emitter,不然这个emitter.ts文件压根没有参与代码的运行....