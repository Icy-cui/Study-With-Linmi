// 动态规划  53. Maximum Subarray
function getLargestVal(l) {
    var max = -Infinity; // max value
    var prev = 0; // prev max value
    for (var i = 0; i < l.length; i++) {
        prev = Math.max(prev + l[i], l[i]); // 每次对比：加上了当前值 和 当前值的最大值
        max = Math.max(max, prev);
    }
    return max;
}

var l1 = [1, -3, 3, 4, 5, -3];
var l2 = [-1, -2, -3, -4, -5, -9, -8];


var res = getLargestVal(l1);
console.log(res);

var ans = document.querySelector('.ans');
ans.innerHTML = 'List ' + '\[' + l1 + '\]' + ' has max subarray value:  ' + res;

var prices = [1, 2, 5, 10];

var maxProfit = function(prices) {
    if (!prices || !prices.length) { return 0; }

    const len = prices.length;
    let max = 0,
        cur = 0,
        next = 0;

    for (let i = 0; i < len; i++) {
        cur = prices[i]
        for (let j = i + 1; j < len; j++) {
            next = prices[j]
            if (next > cur) {
                max = Math.max(max, next - cur)
            }
        }
    }
    return max
}