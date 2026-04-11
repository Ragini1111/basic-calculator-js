let display = document.getElementById('display');
let currentValue = '';
let previousValue = '';
let operation = '';
document.querySelectorAll('button').forEach(button=> {button.addEventListener('click',() => { const value =button.textContent;
    if (!isNaN(value) || value === '.'){
        currentValue += value;
        display.value =currentValue;
    }else if ([ '+','-','*','/'].includes(value)) {
        previousValue =currentValue;
        operation = value;
        currentValue= '';
    }else if (value === '='){
        let result;
        switch (operation){
            case '+':
                result = parseFloat(previousValue) + parseFloat(currentValue);
                break;
                case '-':
                result = parseFloat(previousValue) - parseFloat(currentValue);
                break;
                case '*':
                result = parseFloat(previousValue) * parseFloat(currentValue);
                break;
                case '/':
                result = parseFloat(previousValue) / parseFloat(currentValue);
                break;
                default:
                    result = '';
        }
        display.value = result;
        currentValue = result;
        previousValue = '';
        operation = '';
    }
    else if (value === 'C'){
        currentValue = '';
        previousValue='';
        operation = '';
        display.value = '';
    }else if (value === '<'){
        currentValue = currentValue.slice(0,-1);
        display.value = currentValue;
    }
    });
    });