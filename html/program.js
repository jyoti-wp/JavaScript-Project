document.writeln('Hello Jo');


function addNumber ( numOne, numTwo ) { 
    var newNumber = numOne + numTwo;
    console.log (newNumber);
}

function addName ( fistName, lastName ) {
    var fullName = fistName + " " + lastName;
    console.log (fullName);

}

function multiply(numOne, numTwo) {
    var result = numOne * numTwo;
    console.log(result);
}

function subtract(numOne, numTwo) {
    var result = numOne - numTwo;
    console.log(result);
}

subtract(453, 698); 

function divide(numOne, numTwo) {
    var result = numOne / numTwo;
    console.log(result);
}



























// ARRAY


function checkName (name) {
  var botnayClass = [ 'john', 'jack', 'jill'];

    for (var i = 0; i< botnayClass.length; i++) {
        if(name===botnayClass[i]) {
            console.log (botnayClass[i],' found on position',i);
        }
    }
}









