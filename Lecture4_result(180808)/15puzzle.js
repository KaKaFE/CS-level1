var word = document.getElementById('word'); // HTML element
var word2 = document.getElementById('word2'); // HTML element
var answer = document.getElementById('check');

// game object
var game = {};
game.btnword = []; // buttons
game.ranword = ['culture', 'symbol', 'ocean', 'price', 'route', 'effort', 'section', 'solution', 'gift', 'glory'] // words

// ranword 배열에서 랜덤한 1개의 단어를 뽑는 getword
game.getword = function () {
    var str = game.ranword[Math.floor(Math.random() * game.ranword.length)].toUpperCase();
    game.nowWord = str.split('')
};
// 뽑은 단어를 word에 표시
game.nowdisplay = function () {
    word.innerHTML = game.nowWord.join('');
};

// 버튼을생성, nowword 의값을 버튼에 1개씩 넣는다.
game.btndisplay = function () {
    for (i = 0; i < game.nowWord.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = game.nowWord[i];
        word2.appendChild(btn);
        game.btnword.push(btn);
    }
};

//  nowword의순서가 바뀌면, 바뀐순서의 배열값을 다시버튼에 넣는다.
game.reDisplay = function () {
    for (i = 0; i < this.nowWord.length; i++) {
        this.btnword[i].innerHTML = this.nowWord[i];
    }
};

//  버튼을 섞어준다,
game.shuffle = function () {
    var n = Math.floor((Math.random() * this.nowWord.length) + 1)
    for (i = 0; i < n; i++) {
        Rpush();
        Reverse();
        Lpush()
    }
};
game.getword();
game.nowdisplay();
game.btndisplay();
game.shuffle();


//  버튼 배열을 뒤집는 함수
function Reverse() {
    var Rstr = [];
    for (i = 0; i < game.btnword.length; i++) {
        Rstr.push(game.nowWord.pop())
        game.btnword[i].innerHTML = Rstr.shift()
    }
    for (i = 0; i < game.btnword.length; i++) {
        game.nowWord.push(game.btnword[i].innerHTML);
    }
};
// 배열을 오른쪽으로 미는함수
function Rpush() {
    var str = game.nowWord.pop();
    game.nowWord.unshift(str)
    game.reDisplay();
};

//배열을 왼쪽으로 미는 함수
function Lpush() {
    var str = game.nowWord.shift();
    game.nowWord.push(str)
    game.reDisplay();
};

// 배열의 값이 정답과 맞는지 체크하는 함수
function check() {
    var a = word.innerHTML
    var b = game.nowWord.join('')
    if (a === b) {
        answer.innerHTML = '일치합니다'
    } else {
        answer.innerHTML = '일치하지 않습니다'
    }
};