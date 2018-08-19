var game = {};
// var str = document.getElementById('word').innerHTML
var word2 = document.getElementById('word2')


game.word = [];
game.ranword = ['culture', 'symbol', 'ocean', 'price', 'route', 'effort', 'section', 'solution', 'gift', 'glory']
var str = game.ranword[Math.floor(Math.random() * game.ranword.length)].toUpperCase();
document.getElementById('word').innerHTML = str;
game.str = str.split('')
game.instr = function () {
    for (i = 0; i < game.str.length; i++) {
        game.word[i].innerHTML = game.str[i];
    }
};

for (i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.word.push(btn);
}
function shuffle() {
    var n = Math.floor((Math.random() * str.length)+1)
    for (i = 0; i < n; i++) {
        Rpush();
        Reverse();
        Lpush()
    }
}
shuffle();

function Reverse() {
    var Rstr = [];
    for (i = 0; i < game.word.length; i++) {
        Rstr.push(game.str.pop())
        game.word[i].innerHTML = Rstr.shift()
    }
    for (i = 0; i < game.word.length; i++) {
        game.str.push(game.word[i].innerHTML);
    }
};
function Rpush() {
    var str = game.str.pop();
    game.str.unshift(str)
    game.instr();
};

function Lpush() {
    var str = game.str.shift();
    game.str.push(str)
    game.instr();
};

function check() {
    var a = ""
    for (i = 0; i < game.word.length; i++) {
        a += game.word[i].innerHTML
    }
    if (str === a) {
        document.getElementById('check').innerHTML = '일치합니다'
    } else {
        document.getElementById('check').innerHTML = '일치하지 않습니다'
    }
};