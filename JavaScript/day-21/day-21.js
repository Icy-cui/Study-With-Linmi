// TODO:
// Need to modify later

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
    /**
     *
     * @param {User} user 对应的用户数据
     * @param {HTMLTableElement} parent 所属table
     * @param {Function} onRemove 删除时执行的回调函数
     * @param {string} selector 选择器
     */
    constructor(user, parent, onRemove, selector) {
        this.$user = user;
        this.elParent = parent;
        this.onRemove = onRemove;
        this.el = selector ?
            document.querySelector(selector) :
            document.createElement('tr');
        this.render();
    }

    render() {
        let user = this.$user;
        // 通过数据写入元素内容
        this.el.innerHTML = `
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.score}</td>
        <td>${user.quality}</td>
        <td><button class="remove">删除</button></td>
        `;
        // 将自己添加在所属表格中
        this.elParent.appendChild(this.el);
        // 绑定删除事件
        this.listenRemove();
    }

    listenRemove() {
        // 当tr中的.remove元素被点击时
        this.el.querySelector('.remove')
            .addEventListener('click', () => {
                // 删除自己
                this.el.remove();
                // 如果有回调函数
                if (this.onRemove instanceof Function)
                // 就执行回调函数
                    this.onRemove();
            });
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