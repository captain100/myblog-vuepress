function pipeAsyncFn(...fns) {
  console.log('fns ===>>>>', fns);
  return function(arg) {
    console.log('arg', arg);
    return fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
  };
}
// 简写
const _pipeAsyncFn = (...fns) => arg =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

// 利用 ...fns 将参数转成数组
// fns.reduce() 求和 参考 Array.prototype.reduce()
// 所有的函数加入到 promise.then 的链中逐一执行

// examples
const sum = pipeAsyncFn(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 7000)),
  x => x + 3,
  async x => (await x) + 4,
);

(async () => {
  console.log(await sum(15));
})();
