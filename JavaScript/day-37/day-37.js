class Tagger {
    /**
     * @param {string} selector
     */
    constructor(selector) {
        this.el = document.querySelector(selector);
        this.prepare();
        this.bindEvents();

    }

    bindEvents() {
        this.el.addEventListener('submit', e => {
            e.preventDefault();
            let val = this.input.value;
            console.log(val);
        })
    }

    prepare() {
        this.el.innerHTML = '<form class="tag-wrapper">\n' +
            '            <div class="tag-list">\n' +
            '                <div class="tag">aa</div>\n' +
            '                <div class="tag">bb</div>\n' +
            '                <div class="tag danger">danger</div>\n' +
            '            </div>\n' +
            '            <div class="tag-input">\n' +
            '                <input type="text" autofocus autocomplete="off">\n' +
            '            </div>\n' +
            '        </form>';
        this.input = this.el.querySelector('input');
    }
}

class Tag {
    /**
     * @param {String} text
     * @param type
     */

    constructor(text, type) {
        this.text = text;
        this.type = type;
    }
}

function factory(text) {
    if (text.startsWith('!')) {
        type = 'negative';
        text = text.substring(1);
    } else {
        type = 'positive';
    }

    return new Tag(text, type);
}

new Tagger('main');