const size = 15 * 15;
var a = document.getElementById('glass').firstChild;
let b = '';
let hourglass = {};
hourglass.all = function () {
    this.in = document.getElementById('glass').innerHTML.split('');
}

// hourglass.drawing = function () {
//     for (let i = 0; i < size + 1; i++) {
//         b += this.in.shift();
//         document.getElementById('glass').innerHTML = b;
//     }
// }

var c

hourglass.dot = function () {
     c = setInterval(dot2, 13);
    }    

function dot2() {
    if (hourglass.in.length > 0){
    b += hourglass.in.shift();
    document.getElementById('glass').innerHTML = b;
    }else{
        clearInterval(c)
    }
}

hourglass.all();
hourglass.dot();


