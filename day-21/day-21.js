class UserForm {
    constructor(selector, onSubmit) {
        this.el = document.querySelector(selector);
        this.onSubmit = onSubmit;
        this.bindEvents();
    }

    bindEvents() {
        // 绑定表单提交事件
        this.el.addEventListener('submit', e => {
            // 禁止默认行为，防止整页刷新
            e.preventDefault();

            // 初始化数据
            let data = {};

            // 缓存el，方便调用
            let el = this.el;

            // 获取表单中的每一项input的值
            data.name = el.querySelector('[name=name]').value;
            data.gender = el.querySelector('[name=gender]').value;
            data.score = el.querySelector('[name=score]').value;
            data.quality = el.querySelector('[name=quality]').value;

            // 触发回调函数，并将取到的数据回传
            this.onSubmit(data);

            //重置表单
            this.reset();
        });
    }

    /**
     * 重置表单
     */
    reset() {
        this.el.reset();
    }
}

class UserTable {
    /**
     *
     * @param {UserList} list
     */
    constructor(selector, list) {
        this.el = document.querySelector(selector);
        this.$list = list;
        this.render();
    }

    render() {
        this.$list.all().forEach(user => {
            let row = new UserRow(user);
            let tr = row.render();
            this.el.appendChild(tr);
        });
    }
}

class UserRow {
    /**
     * @param {User} user
     */
    constructor(user) {
        this.$user = user;
    }

    render() {
        let user = this.$user;
        let tr = document.createElement('tr');
        tr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.score}</td>
      <td>${user.quality}</td>
      `;
        return tr;
    }

}

/*视图部分结束*/

/*数据部分开始*/

/**
 * @param {string} name 名称
 * @param {string} gender 性别
 * @param {number} score 文化分
 * @param {number} quality 平时分
 */
class User {
    constructor(name, gender, score = 100, quality = 100) {
        this.name = name;
        this.gender = gender;
        this.score = score;
        this.quality = quality;
    }
}

class UserList {
    /**
     * @param {Array} list 用户列表
     */
    constructor(list = []) {
        this.list = list;
        this.normalize();
    }

    /**
     * 常规化
     *
     * 将this.list中不是User实例的对象转换成User实例
     */
    normalize() {
        this.list.forEach((user, i) => {
            if (user instanceof User)
                return;

            this.list[i] = new User(user.name, user.gender, user.score, user.quality);
        });
    }

    /**
     * 添加用户
     * @param {User} user
     */
    add(user) {
        this.list.push(user);
        this.normalize();
    }

    /**
     * 删除一个用户
     * @param {number} id
     */
    remove(id) {
        this.list.splice(id, 1);
    }

    /**
     * 获取所有用户
     * @return {Array}
     */
    all() {
        return this.list;
    }
}

/*数据部分结束*/

let userList = new UserList();
let userTable = new UserTable('table', userList);

new UserForm('form', data => {
    userList.add(data);
    userTable.render();
});