'use strict';

let value = prompt('Name?', '');

if (value == 'Admin' || 'cc') {
    let pass = prompt('Password?', '');
    while (pass != 'Master') {
        alert("Wrong Password!");
        pass = prompt('Password?', '');
        if (pass == '' || pass == null) {
            alert("Cancel!");
            break;
        }
    }
} else if (userName == '' || userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}

if (-1 || 0) alert('first'); // will print;  -1 true value
if (-1 && 0) alert('second'); // 0 false value
if (null || -1 && 1) alert('third'); // will print;  && has higher priority than ||