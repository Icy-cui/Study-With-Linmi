// ES6
// class Teacher {
//     constructor() {
//       this.fullAttendence = true;
//     }
//   }

//   class LeaveCommand {
//     constructor(teacher) {
//       this.teacher = teacher;
//     }

//     do() {
//       this.teacher.fullAttendence = false;
//       console.log(‘No full attendence!’);
//       // ...
//     }

//     undo() {
//       this.teacher.fullAttendence = true;
//       console.log('Re full attendence.');
//       // ...
//     }
//   }
//
// var aa = new Teacher();
// var leave = new LeaveCommand(aa);



function Teacher() {
    this.fullAttendence = true;
}

function LeaveCommand(teacher) {
    this.teacher = teacher;
}

LeaveCommand.prototype.do = function() {
    this.teacher.fullAttendence = false;

    console.log('No full attendence!');
    aa_html.innerHTML = 'No full attendence!';
    // ...
}

LeaveCommand.prototype.undo = function() {
    this.teacher.fullAttendence = true;

    console.log('Re full attendence.');
    aa_html.innerHTML = 'Re full attendence.';
    // ...
}

var aa = new Teacher();
var aa_html = document.querySelector('.aa');

var leave = new LeaveCommand(aa);

console.log(aa);

leave.do();
console.log(aa);

leave.undo();
console.log(aa);