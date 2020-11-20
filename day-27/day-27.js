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

var coin = [1, 2, 5, 10];
var num = 36;

function lessCoin(coin, num) {
    var temp_res = 0;
    var temp = 0;
    var res = 0;
    for (i = coin.length; i > -1; i--) {
        temp_res = num % coin[i];
        if (num - temp_res * coin[i] > 0) {
            num -= temp_res * coin[i]
            res += temp;
        }
    }
}

var res2 = lessCoin(coin, num);