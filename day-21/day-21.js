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


class UserTable {
    constructor(list, selector) {
        this.$list = list; //data
        this.el = document.querySelector(selector);
        this.render();
    }

    // update table
    render() {
        this.$list.all().forEach(user => {
            let tr = document.createElement('tr');
            new UserList(user, this.el)
        });
    }
}

class UserList {
    constructor(user, parent, selector) {
        this.$user = user;
        this.elparent = parent;
        this.el = selector ? document.querySelector(selector) : document.querySelector('tr');
        this.render();

    }

    render() {
        let user = this.$user;
        this.el.innerHTML = `
            <td>${user.name}</td>
            <td>${user.gender}</td>
            <td>${user.score}</td>
            <td>${user.quality}</td>
            <td><button class="remove">delete</button></td>
            `;
        // append child
        this.elparent.appendChild(this.el);
        this.listenRemove();
    }

    listenRemove() {
        this.el.querySelector('.remove').addEventListener("click", () => {
            this.el.remove();
        })
    }
}

new UserForm('form', data => {
    userList.add(data);
    userTable.render();
});

let userList = new UserList([{
        name: 'whh',
        gender: '男',
        score: 20,
        quality: 20,
    },
    {
        name: 'lsd',
        gender: '女',
        score: 30,
        quality: 30,
    },
]);

let userTable = new UserTable(userList, 'table');