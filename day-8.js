// object -- equal to class
// 区别：“类”(构造函数)就是对象的模板，对象就是“类”的实例。

// class userInfo {
//     constructor(name, age, gender) {
//         // ready to generate
//         this.gender = gender;
//         this.name = name;
//         this.age = age;
//     }
//     // prototype
//     greet() {
//         console.log("name is" + this.name + ", hello.");
//     }
// }


function Info(name, age, gender) {
    // ready to generate
    this.gender = gender;
    this.name = name;
    this.age = age;
}

// prototype
Info.prototype.greet = function() {
    console.log("name is " + this.name + ", hello.")
}

function Person(id) {
    Info.call(this, id)
}

// prototype -- inheritance
Person.prototype = Object.create(Info.prototype)
Person.prototype.console = Person

var user_1 = new Info("john", 23, "M");
user_1.greet();



// test array
var arr1 = new Array()
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 5, 3, 5, 6, 1]
    // .splice(从哪剪, 剪多长, 替换元素1, 替换元素2): 剪切和替换 change original one
    // .slice(从哪剪，在哪停) : 切片 not change the original one
var arr2 = arr1.slice(2, 8)
console.log(arr2)
console.log(arr1)