// factory mode: 很快的产生几类对象

function init() {
    var form = document.querySelector('#create');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.querySelector('[name=name]').value;
        var type = document.querySelector('[name=type]').value;

        // create student
        var student = factory(name, type);

        var user = document.getElementById('user');
        user.innerHTML = name + ' select ' + type + '! ' + 'Courses are: ' + student.subjects;
        form.reset();
    });

}

function Student(name, subjects) {
    this.name = name;
    this.subjects = subjects;
}

/**
 * create student
 * @param {str} name 
 * @param {str} type 
 */

function factory(name, type) {

    switch (type) {
        case 'liberal':
            {
                return new Student(name, ['hist', 'art', 'geo']);
            }
        case 'science':
            {
                return new Student(name, ['math', 'chem', 'phys']);
            }
        case 'pe':
            {
                return new Student(name, ['basket', 'foot', 'base']);
            }
        default:
            throw 'ERROR!'
    }

}

init();