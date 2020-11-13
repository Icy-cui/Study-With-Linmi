function Student() {
    this.intro = 'I\'m a student';
    console.log(this.intro);
}

function Teacher() {
    this.intro = 'I\'m a Teacher';
    console.log(this.intro);
}

function StuFactory() {
    return new Student();
}

function TchrFactory() {
    return new Teacher();
}

function produceUser(factory) {
    switch (factory) {
        case 'student':
            return StuFactory();
        case 'teacher':
            return TchrFactory();
        default:
            throw 'ERROR! No such factory!';
    }
}

var aa = produceUser('student');

// single instance mode
// 无论怎么 new，都返回同一个 instance

function Resource() {

    if (Resource.instance) {
        return Resource.instance;
    } else {
        this.balance = 100;
        // save this value to Resource
        Resource.instance = this;
    }

}

var r = new Resource();
r.balance = 20;
console.log('r:', r) // 20

var r2 = new Resource();
console.log('r2:', r2); // 20

r.balance = 55;
console.log('r2:', r2); // 55