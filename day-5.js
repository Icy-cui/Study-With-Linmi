let evenNum = function(n) {
    for (let i = 1; i <= n; i++) {
        let m = i % 2;
        switch (m) {
            case 1:
                continue;
            case 0:
                console.log(i);
        }
    }
};
let n = prompt('give a number', '')
evenNum(n)