function ask(question, yes, no) {
    if (confirm(question)) yes() // showOk()
    else no(); // showCancel() 
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
// ask 的两个参数值 showOk 和 showCancel 可以被称为 回调函数 或简称 回调。

//   ask("Do you agree?", showOk, showCancel);

// closure
function user(name, age) {
    var age, sex;
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
            console.log("set a new name successful!:", name);
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            if (newAge > 100) {
                alert("Wrong input age!")
            } else {
                age = newAge;
                console.log("set a new age successful!:", age);
            }
        },
        getSex: function() {
            return sex;
        },
        setSex: function(newSex) {
            if (newSex != "F" || newSex != "M") {
                alert("Wrong input sex!")
            } else {
                sex = newSex;
                console.log("set a new sex successful!:", sex);
            }

        }
    }
}
var aname = user("John", 30)
aname.setAge(13)
aname.setName("Ariana")
aname.setSex("F")
    // var name = aname.getName();
    // var sex = aname.getSex();
    // var age = aname.getAge();
console.log("info:", aname.getName(), aname.getSex(), aname.getAge());