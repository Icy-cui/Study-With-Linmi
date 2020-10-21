// sieve method get prime
var isPrime = function(n) {
    let count = 0;
    let signs = new Uint8Array(n);

    for (let i = 2; i < n; i++) {
        if (!signs[i - 1]) {
            count++;

            for (let j = i * i; j <= n; j += i) {
                signs[j - 1] = true;
            }
        }
    }
    alert(count);
    return count;
};

let n = prompt('give a number', '')
isPrime(n)