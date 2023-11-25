function doSum(event) {

    console.log("button clicked");
    event.preventDefault();

    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value

    console.log(firstNumber)
    console.log(secondNumber)
    let result = Number(firstNumber) + Number(secondNumber);

    console.log(result);

    let message = `the sum of ${firstNumber} and ${secondNumber} is ${result}`;
    document.querySelector("#resultBox").innerHTML = message
}
console.log("hellow world")
