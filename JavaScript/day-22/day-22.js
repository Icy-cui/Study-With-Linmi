class Student {
    constructor(name, gender, hairLen = 1) {
        this.setName(name);
        this.setGender(gender);
        this.setHairLength(hairLen);
    }
    setName(name) {
        this.name = name;
    }
    setGender(gender) {
        this.gender = gender;
    }
    setHairLength(hairLen) {
        if ((this.gender == 'M' && hairLen >= 2) || (this.gender == 'F' && hairLen >= 25)) {
            throw 'Exception: Hair too long!';
        } else {
            this.hairLen = hairLen;
            console.log(this.name, ' gender: ', this.gender, ' hair:', hairLen);
        }
    }
}

function init() {
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let student;
        let name = document.querySelector('[name=name]').value;
        let gender = document.querySelector('[name=gender]:checked').value
        let hairLength = document.querySelector('[name=hairLen]').value;
        // console.log(name, gender, hairLength);
        // let student;
        try {
            student = new Student();

            student.setName(name);
            student.setGender(gender);
            student.setHairLength(hairLength);

        } catch (e) { // catch error msg
            alert(e);
        }

        console.log(student);

    });

}

// start
let createForm = document.getElementById('create');
init();