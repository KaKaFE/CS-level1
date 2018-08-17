const size = 15 * 15;
var a = document.getElementById('glass').firstChild;
let b = '';
let hourglass = {};
hourglass.all = function () {
    this.in = document.getElementById('glass').innerHTML.split('');
}

hourglass.drawing = function () {
    for (let i = 0; i < size + 1; i++) {
        b += this.in.shift();
        document.getElementById('glass').innerHTML = b;
    }
}


// // hourglass.dot = function () {
// //     b = b + this.in.shift();
// //     document.getElementById('glass').innerHTML = b;
// //     return;
// // };
// hourglass.all();
// setInterval(hourglass.dot() , 100);

