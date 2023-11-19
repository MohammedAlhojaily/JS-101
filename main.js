function priintNumbers(to){
 for(let i = 1; i<=to; i++){
    console.log(i);
 }
}
function add(firstNumber, secondNumber){
    let result = firstNumber + secondNumber;
    return result;
}

priintNumbers(add(2, 7));