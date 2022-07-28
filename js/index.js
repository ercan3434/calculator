let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');
let createAppendChild = document.getElementsByClassName('number')[0];
let numberArray = [9,8,7,6,5,4,3,2,1,0,'.'];

// number input only
let onlyNumberInput = (entry) => {
    let key = entry.keyCode;
    if(result.value == '' && key == 46) {
        result.value = '0'
    }
    if(result.value.includes(".") && key == 46) {
        return false;
    }
    if( key > 58 || key < 46 || key == 47 ) {
        return false;
    } else {
        return true;
    }
}

// create element number key
let createElementDiv = (parentDiv, arr) => {
    for (let i = 0; i < arr.length; i++) {
        let createNumberDiv = document.createElement('div');
        createNumberDiv.innerHTML = arr[i];
        parentDiv.appendChild(createNumberDiv);
        parentDiv.insertBefore(createNumberDiv, createAppendChild.children[i]);
        createNumberDiv.onclick = (event) => {
            if(result.value.includes('.') && event.target.innerHTML == '.') {
                return result.value
            } else {
                result.value += event.target.innerHTML;
            }
        };
    }  
  }
    
  createElementDiv(createAppendChild, numberArray);


// calculation functions
let addition = () => {
    if(input1.innerHTML && result.value != '') {
        input1.innerHTML = Number(input1.innerHTML) + Number(result.value);
    }else if( result.value != '' ) {
        input1.innerHTML = Number(result.value);
    }
    input2.innerHTML = '&#43;';
    result.value = '';
    input2.value = 'addition';
}

let subtraction = () => {
    if(input1.innerHTML && result.value != '') {
        input1.innerHTML = Number(input1.innerHTML) - Number(result.value);
    }else if( result.value != '' ) {
        input1.innerHTML = Number(result.value);
    }
    input2.innerHTML = '&#8211;';
    result.value = '';
    input2.value = 'subtraction';
}

let multiplication = () => {
    if(input1.innerHTML && result.value != '') {
        input1.innerHTML = Number(input1.innerHTML) * Number(result.value);
    }else if( result.value != '' ) {
        input1.innerHTML = Number(result.value);
    }
    input2.innerHTML = '&#215;';
    result.value = '';
    input2.value = 'multiplication';
}

let division = () => {
    if(input1.innerHTML && result.value != '') {
        input1.innerHTML = Number(input1.innerHTML) / Number(result.value);
    }else if( result.value != '' ) {
        input1.innerHTML = Number(result.value);
    }
    input2.innerHTML = '&#247;';
    result.value = '';
    input2.value = 'division';
}

let resultCalculator = () => {
    if(input1.innerHTML){
        result.value = input1.innerHTML;
    }
    input1.innerHTML = '';
    input2.innerHTML = '';
}

let clearResult = () => {
    result.value = '';
    input1.innerHTML = '';
    input2.innerHTML = '';
}

// using keyboard keys
let keyboard = (event) => {
    if(event.key == '+' || (input2.value == 'addition' && (event.key == '=' || event.key == 'Enter'))) {
        addition();
    }else if(event.key == '-' || (input2.value == 'subtraction' && (event.key == '=' || event.key == 'Enter'))) {
        subtraction();
    }else if(event.key == '*' || (input2.value == 'multiplication' && (event.key == '=' || event.key == 'Enter'))) {
        multiplication();
    }else if(event.key == '/' || (input2.value == 'division' && (event.key == '=' || event.key == 'Enter'))) {
        division();
    }else if(event.key == 'Delete') {
        clearResult();
    }

    if(event.key == '=' || event.key == 'Enter') {
        resultCalculator();
    }
}

document.addEventListener("keydown", keyboard, false);

// using click equal
let equal = () => {
    if(input2.value == 'addition') {
        addition();
    }else if(input2.value == 'subtraction') {
        subtraction();
    }else if(input2.value == 'multiplication') {
        multiplication();
    }else if(input2.value == 'division') {
        division();
    }

    resultCalculator();
}








