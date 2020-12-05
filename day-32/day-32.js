function Music(name, hot) {
    this.name = name;
    this.hot = hot;
}

Music.prototype.play = function() {
    console.log(this.name + ' 播放中...');
}

function MusicList() {
    this.list = [];
    this.current = 0;
}

MusicList.prototype.add = function(music) {
    this.list.push(music);
}

MusicList.prototype.next = function(music) {
    return this.list[++this.current];
}

MusicList.prototype.prev = function(music) {
    return this.list[--this.current];
}

MusicList.prototype.onlyHot = function() {
    return this.list.filter(function(music) {
        return music.hot;
    });
}

var musicList = new MusicList();
musicList.add(new Music('阿花爱上了阿蛋', true));
musicList.add(new Music('我的滑板孩', true));
musicList.add(new Music('辣鸡的爱', false));

console.log(musicList.onlyHot());

// console.log(musicList.next());
// console.log(musicList.prev());
// console.log(musicList.next());