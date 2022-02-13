
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clearButton');
const decimalButton = document.querySelector('.dot');
const inputBox = document.querySelector('.inputField');
const resultField = document.querySelector('.result');
const deleteButton = document.querySelector('.deleteB')


let firstTerm = 0;
let secondTerm = ""
let operatorActive = false;
let firstOperator = true;
let currentOperator;
let decimalActive = false;
inputBox.textContent = firstTerm;

//button even listeners
numberButton.forEach(numbers => numbers.addEventListener('click',inputNumber));
operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
equalButton.addEventListener('click', operate);
clearButton.addEventListener('click',clear)
decimalButton.addEventListener('click', decimal);
deleteButton.addEventListener('click', del);


function inputNumber(n){
    equalButton.addEventListener('click', operate);
    if(firstOperator==true){
        if(decimalActive == false){
            if(firstTerm!=0) firstTerm = firstTerm + n.target.getAttribute("data-key");
            else firstTerm =  n.target.getAttribute("data-key"); 
            inputBox.textContent = firstTerm;
        }else{
            firstTerm = firstTerm + "." + n.target.getAttribute("data-key");
            decimalActive = false;
            inputBox.textContent = firstTerm;

        }
    }
    else{
        if(decimalActive == false){
            operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
            secondTerm = secondTerm + n.target.getAttribute("data-key");
            inputBox.textContent = secondTerm;
        }else{
            secondTerm = secondTerm + "." + n.target.getAttribute("data-key");
            decimalActive = false;
            inputBox.textContent = secondTerm;

        }
    }    
}

function inputOperator(operator){
    operatorActive = true;
    equalButton.addEventListener('click', operate);
    decimalButton.addEventListener('click', decimal);

    if(firstOperator == true){
        firstTerm = Number(firstTerm); 
        firstOperator = false;
    }else{
        if(secondTerm != ""){
            operate();
        }
        
    }
    switch (operator.target.getAttribute("data-key")){
        case '+':
            currentOperator = '+'
            operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
            operatorButton[0].removeEventListener('click',inputOperator); 
            break;
        case '-':
            currentOperator = '-'
            operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
            operatorButton[1].removeEventListener('click',inputOperator);
            break;
        case '*':
            currentOperator = '*'
            operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
            operatorButton[2].removeEventListener('click',inputOperator);
            break;
        case '/':
            currentOperator = '/'
            operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
            operatorButton[3].removeEventListener('click',inputOperator);
            break;
    }
    resultField.textContent = firstTerm + `${currentOperator}`;  
  

    
}

function operate(){
    equalButton.removeEventListener('click', operate);
    switch(currentOperator){
        case '+':
            firstTerm = add(Number(firstTerm), Number(secondTerm));
            resultField.textContent = firstTerm;
            break;
        case '-':
            firstTerm = subtract(Number(firstTerm), Number(secondTerm));
            resultField.textContent = firstTerm;
            break;
        case '*':
            firstTerm = multiply(Number(firstTerm), Number(secondTerm));
            resultField.textContent = firstTerm;
            break;
        case '/':
            firstTerm = divide(Number(firstTerm), Number(secondTerm));
            resultField.textContent = firstTerm;
            break;   
        default:
            firstTerm = Number(firstTerm);  
            resultField.textContent = firstTerm;
  
    }   
    secondTerm="";
}

function clear(){
    firstTerm = 0;
    secondTerm = ""
    operatorActive = false;
    firstOperator = true;
    currentOperator;
    decimalActive = false;
    resultField.textContent = 0;
    inputBox.textContent = firstTerm;
    numberButton.forEach(numbers => numbers.addEventListener('click',inputNumber));
    operatorButton.forEach(operator=>operator.addEventListener('click',inputOperator));
    equalButton.addEventListener('click', operate);
    clearButton.addEventListener('click',clear)
    decimalButton.addEventListener('click', decimal);
}

function del(){
    console.log(firstTerm.slice(0,-1));
    //firstTerm = 
}



function decimal(){
    
    decimalButton.removeEventListener('click', decimal);
    decimalActive = true;
}


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}



