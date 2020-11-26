function Teacher() {
    this.fullAttendence = true;
}

function LeaveCommand(teacher) {
    this.teacher = teacher;
}

LeaveCommand.prototype.do = function() {
    this.teacher.fullAttendence = false;

    console.log('请假成功');
    console.log('重新安排课程...');
    // ...
}

LeaveCommand.prototype.undo = function() {
    this.teacher.fullAttendence = true;

    console.log('撤销请假');
    console.log('恢复课程...');
    // ...
}