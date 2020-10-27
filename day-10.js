var a = [2, 4, 6, 8];

function Foreach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        callback(item);
    }
}

function equal2(item) {
    if (item == 2) {
        console.log(item);
    }
}

// use function Foreach -- pass callback func as arg
Foreach(a, function(item) {
    if (item < 5) {
        console.log(item);
    }
});

// another way to pass func
Foreach(a, equal2);