const button = document.getElementById("btn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const count = document.getElementById("count");
const f6 = document.getElementById("f6");

let answer = 0;
button.addEventListener("click", function(i){
    const cou = count.value;
    const n1 = +num1.value;
    const n2 = +num2.value;
    count.value = null;
    num1.value = null;
    num2.value = null;
    switch(cou){
        case "+":
            answer = n1 + n2;
            break;
        case "-":
            answer = n1 - n2;
            break;
        case "*":
            answer = n1 * n2;
            break;
        case "/":
            answer = n1 / n2;
            break;
        default:
            answer = "請選擇運算符號";  
    }
    console.log(answer);
    f6.innerHTML = `<h5>${answer}</h5>`;
});