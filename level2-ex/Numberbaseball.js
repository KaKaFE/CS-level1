// ai는 객체는 1~9사이의 숫자를 가지고 랜덤한 3개의 숫자를 뽑는다.
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
// 유저객체는 리스트라는 빈배열을 가지고있는다.
var User = {
    list: []
};
//  ai가 3개의 숫자를 뽑아 selectnum 배열을 가진다.
Ai.getNumber();
// console.log(Ai.selectNum);
// 유저가 값을 입력하면, run()함수가 실행될때 usernum1인풋창의 값을 user객체의 list에 넣는다
function getUserNumber() {
    User.list = document.getElementById('usernum1').value;
};
// 확인 버튼을 누르면 run()함수가 실행됨 
// user의입력값을 받고, valuercheck를 통해 값을확인후, display함수를 통해 화면에 뿌린후,uservalue함수로 초기화
function run() {
    getUserNumber();
    valueCheck();
    baseBall();
    displayHistory();
    userValueinit();
};
// 입력값체크 함수 길이,숫자,문자를 조건에맞는지 체크한다.
function valueCheck() {
    lengthCheck();
    numberCheck();
    strCheck();
};
// 길이 체크함수, userlist의 길이가 3보다 작거나 크면 알림창후,user값 초기화
function lengthCheck() {
    if (User.list.length < 3 || User.list.length > 3) {
        alert('3자리 숫자만 입력해주세요');
        userValueinit();
    }
};
// 중복숫자 체크함수, 배열의 0번째값과 1,2번째값이 같으면알림후,user값 초기화
function numberCheck() {
    for (i = 0; i < User.list.length; i++) {
        if (User.list[i] === User.list[i + 1] || User.list[i] === User.list[i + 2]) {
            alert('중복된 숫자는 입력하실수 없습니다.')
            userValueinit();
        }
    }
};
// 문자 체크함수, userlist에 문자가들어잇으면 넘버메소드 실행시 NaN출력 ,
// 그값을 값 === NaN 으로 하려했으나, 비교가안됨 그래서 isNaN을통해 true값 출력
// true이면 알림후 user값 초기화
function strCheck() {
    if (isNaN(Number(User.list))) {
        alert('3자리 숫자만 입력해주세요.')
        userValueinit();
    }
};
// user가 입력한 인풋창을 초기화 해주는 함수, user객체의 배열도 초기화한다.
function userValueinit() {
    document.getElementById('usernum1').value = ''
    User.list = [];
};
// 스트라이크 판단함수, str초기화후 자리수가같은 배열값이면 str을 1증가
function strike() {
    Str = 0;
    for (var i = 0; i < 3; i++) {
        if (User.list[i] == Ai.selectNum[i]) {
            Str++
        }
    }
    return Str;
};
// 볼 판단함수, 배열의값은 같으나 인덱스값이 다른경우, 이중루프로 했었으나,함수로 쪼개서
// 배열의 0번째와 0,1,2 를 비교후 1번째와 0,1,2를 비교하게 하는방식 구현
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
// str과 bal의 초기화, 판단후 게임결과를 표시하는 함수
//  3일시 알림창및 게임전체 초기화 함수실행
// 아닐시 스트라이크의 값과 볼의값을 화면에 출력
function baseBall() {
    var Str = 0;
    var Bal = 0;
    Str = strike();
    Bal = ball();
    displayResult(Str, Bal);
};
function displayResult(Str, Bal) {
    if (Str === 3) {
        alert('3스트라이크! 맞추셨습니다!');
        alert('정답은' + Ai.selectNum.join('') + '입니다!')
        alert('다시 시작합니다!')
        initialization();
    } else {
        var x = document.getElementById("result")
        var result = Str + '스트라이크, ' + Bal + '볼' + '<br>'
        x.innerHTML += result;
    }
};
// 사용자가 입력한값의 기록을 표시하는함수
function displayHistory() {
    var x = document.getElementById('history')
    x.innerHTML += User.list + '<br>';
};
// 초기화함수, 램던으로 3개를뽑아썻던 배열을 다시 9개로 초기화
// user배열도 초기한후, 표시됬던 기록을모두 초기화한다음, ai가 다시3개의번호를뽑는다
function initialization() {
    Ai.list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    userValueinit();
    displayInit();
    Ai.getNumber();
};
// 화면초기화 함수
function displayInit() {
    var x = document.getElementById('result')
    var y = document.getElementById('history')
    x.innerHTML = ' '
    y.innerHTML = ' '
};
