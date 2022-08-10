let firstNumber = '';   // первое число
let SecondNumber = '';  // второе число
let sign = '';  // знак операци
let finish = false; // равно

const arrNumbers = ['0','1','2','3','4','5','6','7','8','9',','];
const arrSigns = ['%','/','x','-','+','÷','+/-'];

const title = document.querySelector(".calc_title p")

function clearAll() {
    firstNumber = '';
    SecondNumber = '';
    sign = '';
    finish = false;
    title.textContent = 0; 
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector(".calc_buttons").onclick = (e) => {
    // нажат на кнопку
    if(!e.target.classList.contains('btn')) return;
    // console.log(e.target.textContent);
    // нажата кнопка clearAll ac
    if(e.target.classList.contains('ac')) return;
    
    title.textContent = '';
    // получаю нажатую кнопку 0-9 или ,
    const item = e.target.textContent;

    if(arrNumbers.includes(item)) {
        if(SecondNumber === '' && sign === '') {
        firstNumber += item;
        title.textContent = firstNumber;
        // console.log(firstNumber);
        }
        else if(firstNumber !== '' && SecondNumber !== '' && finish ){
            SecondNumber = item
            finish = false;
            title.textContent = SecondNumber;
        }
        else {
            SecondNumber += item
            title.textContent = SecondNumber
        }
        // console.log(firstNumber, SecondNumber, sign);
    }
    if(arrSigns.includes(item)) {
        sign = item;
        title.textContent = sign
        console.log(firstNumber);
        // console.log(firstNumber, SecondNumber, sign);
    }

    // нажата =
    if(item === '=') {
        if(SecondNumber === '') SecondNumber = firstNumber;
        switch (sign) {
            case "+":
                firstNumber = (+firstNumber) + (+SecondNumber);
                break;
            case "-":
                firstNumber = firstNumber - SecondNumber
                break;
            case "x":
                firstNumber = firstNumber * SecondNumber
                break;
            case "÷":
                firstNumber = firstNumber / SecondNumber;
                break
            }
            finish = true;
            title.textContent = firstNumber
            console.log(firstNumber, SecondNumber, sign);

    }

}
