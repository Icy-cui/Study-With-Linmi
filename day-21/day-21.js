class UserForm {
    constructor(selector, onSubmit) {
        this.el = document.querySelector(selector);
        this.onSubmit = onSubmit;
        this.bindEvents();
    }

    bindEvents() {
        this.el.addEventListener('submit', e => {
            e.preventDefault();
            let data = {};

            let q = this.el.querySelector.bind(this.el);
            data.name = q('[name=name]').value;
            data.gender = q('[name=gender]').value;
            data.score = q('[name=score]').value;
            data.quality = q('[name=quality]').value;

            this.onSubmit(data);

            this.reset();
        });
    }
}

class UserList {
    constructor() {

    }

}

class UserTable {

}


new UserForm('form', data => {
    userList.add(data);
    userTable.render();
});

let userList = new UserList();
let userTable = new UserTable('table', userList);