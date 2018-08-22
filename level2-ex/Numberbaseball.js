
// var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var aiNumber = [];
// var usernum = [];


var Ai = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    selectNum: [],
    getNumber: function () {
        for (var i = 0; i < 3; i++) {
            var select = Math.floor(Math.random() * (this.list.length));
            this.selectNum[i] = this.list.splice(select, 1)[0];
        }
    }
};

var User = {
    list: []
};

Ai.getNumber();
console.log(Ai.selectNum);
function getUserNumber(){
    User.list = document.getElementById('usernum1').value;
}
function run() {
    getUserNumber();
    valueCheck();
    displayResult();
    displayHistory();
    userValueinit();
};
function valueCheck() {
    lengthCheck();
    numberCheck();
    strCheck();
};
function lengthCheck() {
    if (User.list.length < 3 || User.list.length > 3) {
        alert('3자리 숫자만 입력해주세요');
        userValueinit();
    }
};
function numberCheck() {
    for (i = 0; i < User.list.length; i++) {
        if (User.list[i] === User.list[i + 1] || User.list[i] === User.list[i + 2]) {
            alert('중복된 숫자는 입력하실수 없습니다.')
            userValueinit();
        }
    }
};
function strCheck() {
    if (isNaN(Number(User.list))) {
        alert('3자리 숫자만 입력해주세요.')
        userValueinit();
    }
};
function userValueinit() {
    document.getElementById('usernum1').value = ''
    User.list = [];
};
function baseBall(Str, Bal) {
    if (Str === 3) {
        alert('3스트라이크! 맞추셨습니다!');
        alert('정답은' + Ai.selectNum.join('') +'입니다!')
        alert('다시 시작합니다!')  
        initialization();
    } else {
        var x = document.getElementById("result")
        var result = Str + '스트라이크, ' + Bal + '볼' + '<br>'
        x.innerHTML += result;
    }
};
function strike() {
    Str = 0;
    for (var i = 0; i < 3; i++) {
        if (User.list[i] == Ai.selectNum[i]) {
            Str++
        }
    }
    return Str;
};
function ball() {
    Bal = 0;
    var j = 0;
    for (j = 0; j < 3; j++) {
        ballLoop(j)
    }
    return Bal;
};
function ballLoop(j) {
    for (i = 0; i < Ai.selectNum.length; i++) {
        if ((j != i) && User.list[j] == Ai.selectNum[i]) {
            Bal++;
        }
    }
};
function displayResult(){
    var Str = 0;
    var Bal = 0;
    Str = strike();
    Bal = ball();
    baseBall(Str, Bal);
};
function displayHistory(){
    var x = document.getElementById('history')
    x.innerHTML += User.list + '<br>';
}
function initialization(){
    Ai.list = [1,2,3,4,5,6,7,8,9]
    userValueinit();
    displayInit();
    Ai.getNumber();
};
function displayInit(){
    var x = document.getElementById('result')
    var y = document.getElementById('history')
    x.innerHTML = ' '
    y.innerHTML = ' '
};
