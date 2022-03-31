let prevNumber = '';
let kalkulasiOperator = '';
let currentNumber = '0';
const kalkulatorScreen = document.querySelector('.kalkulator-screen');
const updateScreen = (number) => { /*perbarui layar kalkulator saat tombol angka ditekan */
    kalkulatorScreen.value = number;
}
const inputNumber = (number) => { /* if statement agar dapat menginput 2 angka lebih */
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);

    });
})
const inputOperator = (operator) => {
    if (kalkulasiOperator === ''){
        prevNumber = currentNumber;
    }
    kalkulasiOperator = operator;
    currentNumber = '0';
}
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);

    });
})
const kalkulasi = () => { /*jalankan tombol operasi */
    let result = '';
    switch(kalkulasiOperator){
        case '+':
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
        case '-':
        result = parseFloat(prevNumber) - parseFloat(currentNumber)
        break
        case '*':
        result = parseFloat(prevNumber) * parseFloat(currentNumber)
        break
        case '/':
        result = parseFloat(prevNumber) / parseFloat(currentNumber)
        break
        default:
            return
    }
    currentNumber = result
    kalkulasiOperator = ''
}
const equalSign = document.querySelector('.equal-sign'); /*jalankan tombol sama dengan */
equalSign.addEventListener("click", () => {
    console.log('Equal-sign button is pressed')
    kalkulasi()
    updateScreen(currentNumber);
})
const clearAll = () =>{ /*untuk menetapkan angka 0 ke currentNumber */
    prevNumber = ''
    kalkulasiOperator = ''
    currentNumber = '0'
}
const clearBtn = document.querySelector('.all-clear'); /*jalankan tombol AC */
clearBtn.addEventListener("click", () => {
    console.log('AC button is pressed')
    clearAll()
    updateScreen(currentNumber)
})
inputDecimal = (dot) => { /* menjalankan tombol . (decimal) */
     if (currentNumber.includes('.')){ /*agar pemasukkan tanda . (decimal tidak berulang) */
         return
     }
    currentNumber += dot
}
const decimal = document.querySelector('.decimal') /* menjalankan kalkulasi operasi desimal */
decimal.addEventListener("click", (Event) => {
    console.log(Event.target.value)
    inputDecimal(Event.target.value)
    updateScreen(currentNumber)
})
inputPercentage = (percent) => { /* menjalankan tombol percen */
    if (currentNumber.includes('%')){
        return
    }
    currentNumber = currentNumber / 100
}
const percentages = document.querySelector('.percentage');
percentages.addEventListener("click", (Event) => {
    console.log(Event.target.value)
    inputPercentage(Event.target.value)
    updateScreen(currentNumber)
})
