class User {
    /**
     * @param {string} name 名称
     * @param {string} gender 性别
     * @param {number} score 文化分
     * @param {number} quality 平时分
     */
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
}

let userList = new UserList([{
        name: 'linmi',
        gender: 'Female',
    },
    {
        name: 'cc',
        gender: 'Female',
    },
]);

let whh = new User('aa', '男', 20, 100);

userList.add(whh);
userList.add({
    name: 'bb',
    gender: '女',
});

console.log(userList.list);