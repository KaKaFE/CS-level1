var word = document.getElementById('word'); // HTML element
var word2 = document.getElementById('word2'); // HTML element
var answer = document.getElementById('check');
var score = document.getElementById('score');
var time = document.getElementById('time');


// game object
var Allhuman = [];
var game = {};
game.btnword = []; // buttons
game.ranword = ['culture', 'symbol', 'ocean', 'price', 'route', 'effort', 'section', 'solution', 'gift', 'glory'] // words

//  페이지 로드시 실행되는 메인함수, 배열에서 랜덤단어를 얻고,버튼과 섞기기능 실행
game.main = function () {
    game.getword();
    game.nowdisplay();
    game.btndisplay();
    game.shuffle();
}
//  그후 비어있는 휴먼(사용자)객체 10개를 생성한다
game.makeHuman = function () {
    for (i = 0; i < 10; i++) {
        Allhuman[i] = new human('', 10000)
    }
}
// 게임실행횟수 0으로 초기화
game.coount = 0;
// 사용자의 이름을 입력받아 휴먼객체name에 넣는다 
game.getName = function () {
    var x = prompt('What your name ?')
    Allhuman[this.coount].name = x;
}
// 사용자의 게임기록을 휴먼 객체 time값에 넣는다.
game.getTime = function () {
    var x = parseFloat(time.innerHTML);
    Allhuman[this.coount].time = x;
}
// 랭킹보드를 sort 를 이용해 time 값을 기준으로 정렬하고, 모든휴먼객체의 i번째를i번째 랭킹보드에 표시하는 함수 
game.allrank = function () {
    Allhuman.sort(function (a, b) {
        if (a.time > b.time) {
            return 1;
        }
        if (a.time < b.time) {
            return -1;
        }
        return 0;
    });
    for (i = 0; i < Allhuman.length; i++) {
        Allhuman[i].inranking(i);
    }
    this.coount++
}
//  휴먼객체는 이름과 시간벨류를 가지고있다
function human(name, time) {
    this.name = name;
    this.time = time;
}
// 휴먼객체의 inranking 메소드 , i번째 랭킹의 innerHTML 에 값을 넣는다
human.prototype.inranking = function (i) {
    document.getElementById('rank' + i).innerHTML =
        (i + 1) + ' 위 ' + "  이름   :   " + this.name + "  시간   :  " + this.time + "    초";
}


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
    word2.innerHTML = ''
    this.btnword = [];
    for (i = 0; i < this.nowWord.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.nowWord[i];
        word2.appendChild(btn);
        this.btnword.push(btn);
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
    var n = Math.floor((Math.random() * this.nowWord.length))
    for (i = 0; i < n; i++) {
        Rpush();
        Reverse();
        Lpush()
    }
};
//  점수변화 함수 너무많은 일을한다. 줄어야 하는데..
game.score = function () {
    var score1 = Number(score.innerHTML)
    if (score1 === 2) {
        score.innerHTML = score1 + 1
        clearInterval(x);
        alert('Thank you for Playing!');
        this.getTime();
        this.allrank();
        score.innerHTML = 0;
        var x = setInterval(playTime, 50);
        startTime = Date.now();
        this.getName();
    } else {
        score.innerHTML = score1 + 1
    }
}

// 페이지 로드시 실행되는 메소드들
game.main();
game.makeHuman();
game.getName();
var startTime = Date.now();
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
        game.main();
        game.score();
    } else {
        answer.innerHTML = '일치하지 않습니다'
    }
};
//  플레이 타임을 알아내는 함수 , 첫실행시 시간(starttime)과 게임이 끝날때 시간을 구해서 빼면 된다.
function playTime() {
    var playTime = Date.now() - startTime;
    time.innerHTML = (playTime / 1000) + '초'
}
var x = setInterval(playTime, 50);
