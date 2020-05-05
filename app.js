
/* Function to check input validity*/
function takeNums(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (num1 < 2 || num1 > 100 || num2 < 2 || num2 > 100){
        document.getElementById('dope').innerHTML = 'Invalid input, please try again.';
    }
    else if (num1 >= 2 && num1 <= 100.00 && num2 >= 2 && num2 <= 100.00){
        arrayBuilder(num1, num2);
        document.getElementById('dope').innerHTML = ''
    }
} 

/* Function to return true if a number is prime */
function primeGenerator(num){
    var flag = true;
    for (var i=2; i<=Math.ceil(num/2); i++){
        if((num % i)==0){
            flag = false;
            break;
        }
    }
    return flag;
}

/* Function to verify that the smaller input is the start number,
    to add each true result from primeGenerator to Array,
    and also to print the array. */

function arrayBuilder(num1, num2){
    var startNum = 0;
    var endNum = 0;
    var Array = [];

    if (num1 > num2){
        startNum = num2;
        endNum = num1;
    }
    else if (num1 < num2){
        startNum = num1;
        endNum = num2;
    }

    while(startNum <= endNum){
        if(primeGenerator(startNum) == true){
            Array.push(startNum);
            startNum = startNum + 1;
        }
        else{
            startNum = startNum + 1;
        }
    }
    document.getElementById('blue-text').innerHTML = 'There are ' + Array.length + ' prime numbers.';
    document.getElementById('red-text').innerHTML = Array;
}