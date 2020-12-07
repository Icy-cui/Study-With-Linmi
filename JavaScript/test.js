function curry(f) { // curry(f) 执行柯里化转换
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

// 用法
function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

alert(curriedSum(1)(2)); // 3