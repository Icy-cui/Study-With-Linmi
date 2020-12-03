// function Student(termId) {
//     this.termId = termId;
// }

// function StudentList() {
//     this.list = [];
// }

// StudentList.prototype.add = function(student) {
//     this.list.push(student);
// }

// StudentList.prototype.remove = function(index) {
//     this.list.splice(index, 1);
// }

// StudentList.prototype.removeByTerm = function(termId) {
//     this.list = this.list.filter(function(student) {
//         return student.termId != termId;
//     });
// }

// var list = new StudentList;
// list.add(new Student(1));
// list.add(new Student(1));
// console.log(list);

// list.removeByTerm(2);
// console.log(list);