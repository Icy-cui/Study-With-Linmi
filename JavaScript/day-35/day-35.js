/* Form */
class UserForm {
    constructor(selector, errSelect = '.alert-danger') {
        this.el = document.querySelector(selector);
        this.err = this.el.querySelector(errSelect);
        this.bindEvents();
    }
    bindEvents() {
        this.bindSubmit();
        this.bindInput();
    }

    /**
     * 输入信息，并显示错误信息
     */
    bindSubmit() {
        let form = this.el;
        let query = form.querySelector.bind(form);
        form.addEventListener('submit', e => {
            e.preventDefault();
            // querySelector name= name/gender/score/quality
            let name = query('[name=name]').value;
            let gender = query('[name=gender]').value;
            let score = query('[name=score]').value;
            let quality = query('[name=quality]').value;
            // console.log(name);
            // validate form input
            let builder = new Builder();
            try {
                builder.setName(name).setGender(gender).setQuality(quality).setScore(score);
            } catch (e) {
                // display error information
                this.err.hidden = false;
                this.err.innerHTML = e;
                return;
            }

            console.log(builder.build());
            this.el.reset();
        })
    }

    /**
     * 当用户输入的时候隐藏错误信息
     */
    bindInput() {
        let form = this.el;
        form.addEventListener('keyup', e => {
            if (e.key == 'Enter') {
                return;
            }
            this.err.hidden = true;
        })
    }
}

/* User data */
class User {}

class Builder {
    constructor() {
        this.instance = new User();
    }

    setName(name) {
        if (!name) {
            throw 'Name cannot be None!'
        }
        let maxLen = 15;
        if (name.length > maxLen) {
            throw 'Name cannot be longer than ${maxLen}!'
        }
        this.instance.name = name;
        return this;
    }

    setGender(gender) {
        let genderSet = ['M', 'F'];

        if (genderSet.indexOf(gender) < 0)
            throw 'Gender should be F or M!';

        this.instance.gender = gender;
        return this;
    }

    setScore(score) {
        if (!this.validNum(score)) {
            throw 'Score should be a number!'
        }
        this.instance.score = parseFloat(score);
        return this;
    }

    setQuality(quality) {
        if (!this.validNum(quality)) {
            throw 'Quality should be a number!'
        }
        this.instance.quality = parseFloat(quality);
        return this;
    }
    validNum(val) {
        // if (val != 0  && !parseFloat (val)) {
        //     return false;
        // }
        // return true;
        return val === 0 || parseFloat(val);
    }
    build() {
        return this.instance;
    }
}

// let builder = new Builder();
// builder.setName('cc').setGender('F').setQuality(100).setScore(100);
// console.log(builder.build());

let form = new UserForm('form');