function Mammal(age, gender) {
    // ready to generate
    this.gender = gender;
    this.age = age;
}

function Person(id) {
    Mammal.call(this, id)
        // no this.name
        // this.name = name;
    console.log("name is " + this.name)
}

var pname_1 = { name: 'Jojo' }
var pname_2 = { name: 'Dior' }
var pname_3 = { name: 'yummy' }

// 3 method to add this.name Arg.
// 1. call function
Person.call(pname_1, 123, 2, 'F');
// 2. apply function (thisArgs, array)
Person.apply(pname_2, [333]);
// 3. bind function: first bind thisArgs then pass params
person3 = Person.bind(pname_3);
person3(111);

var y = document.getElementById("display")

function disName(p) {
    y.innerHTML = p; //将输入的 value 赋给 div 标签
}
disName(pname_3.name);