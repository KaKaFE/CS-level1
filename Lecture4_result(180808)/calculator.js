var calcul = { 'inputArray': [] }


//  숫자버튼 입력시 배열과,입력창에 표시하는부분
calcul.input = function (event) {
    var str = event.target.innerHTML
    if (str === '+' || str === '-' || str === '/' || str === '*') {
        this.inputArray.push(' ' + str + ' ');
    } else {
        this.inputArray.push(str);
    }
    this.display();
    console.log(this.inputArray)
    return
};

//  입력받아 배열에 들어있는 값을, 공백기준으로 연산자와 숫자를 나누는 객체
calcul.split = function () {
    this.inputArray = this.inputArray.join('').split(' ');
};

// 입력받은 값을 아웃풋 창에 표시하는 객체
calcul.display = function () {
    document.getElementById('output').value = this.inputArray.join('')
};

// C 버튼을 누를시 , 배열을 초기화하고 , 아웃풋창을 초기화해주는 객체
calcul.clear = function () {
    this.inputArray = [];
    return document.getElementById('output').value = '';
};

// 계산을 해서 anser 값을 리턴해주는 객체
calcul.result = function (first, second, op) {
    var anser;
    switch (op) {
        case "+":
            anser = first + second;
            break;
        case "-":
            anser = first - second;
            break;
        case "*":
            anser = first * second;
            break;
        case "/":
            anser = first / second;
            break;
        default:
            return NaN;
    }
    return anser;
};

//  배열의 첫번째 값을 숫자로 꺼내는 객체
calcul.getValue = function () {
    var first = this.inputArray.shift();
    var n = Number(first)
    return n;
};

// 배열의 연산자를 판단, 꺼내는 객체
calcul.getOp = function () {
    var op = this.inputArray.shift();
    if (op === '+' || op === '-' || op === '/' || op === '*') {
        return op
    } else {
        return alert('올바른연산자를 입력하세요');
    }
};

//  = 버튼을 누를시 실행되는 객체
// 배열을 공백기준으로 나눈후, 첫번째 값을 변수에저장,
// 입력받은 배열의 값이 0이될때까지 연산자와 두번째 값을 꺼내는 작업 반복,
// 이때, 첫번째 값에 2번째값까지 계산된 값을 넣어 초기화 해줘야 2~3개의 연산자가있는 수식을 
//  계산할수있다. 
calcul.run = function () {
    this.split();
    var first = this.getValue();
    while (!this.inputArray.length == 0) {
        var op = this.getOp();
        var second = this.getValue();
        var result = this.result(first, second, op)
        first = result;
    }
    return document.getElementById('output').value = result;
};

calcul.null = function () {
    alert('아직 미구현');
};


// 숫자창에 직접 입력방식도나중에! 구현.
// document.getElementById("output").onkeypress = function (event) {
//       if (event.keyCode == 13 || event.which == 13) {
//         calcul.inputArray = document.getElementById('output').value
//         calcul.run();
//     }
// };
