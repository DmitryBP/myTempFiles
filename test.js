const add = (a, b) => a + b; //функция сложения 

function decorator(f, ms) {
    return function (...args) {
        setTimeout(function () {
            f.apply(this, args);
        }, ms);
    };
}
const delayedAdd = decorator(add, 2000);
delayedAdd(51, 10); //61
///////////////////
function decorator(f, ms) {
    return function (...args) {
        setTimeout(function () {
            f.apply(this, args); // (1)
        }, ms);
    };
}
// let computer = {
//     text: "Результат: ",
//     add(a, b) {
//         console.log(this.text + (a + b)); // (2)
//     },
// };
// const delayedAdd = decorator(computer.add, 2000);
// delayedAdd(51, 10);
// Чему будет равен this в 
// строке (1) и соответственно 
// this.text в строке (2)?
