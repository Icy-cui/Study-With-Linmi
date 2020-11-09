class UserForm {
    constructor(selector, onSubmit) {
        this.el = document.querySelector(selector);
        this.onSubmit = onSubmit;
        this.bindEvents();
    }

}
/*数据部分结束*/

let userList = new UserList();
let userTable = new UserTable('table', userList);

new UserForm('form', data => {
    userList.add(data);
    userTable.render();
});