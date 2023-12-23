function mycode(){
    alert("Hellow i am sohal ")
}

function but(){
document.write('hello how are you doing')
}

function adding(a,b){
    document.write(`sum of the two numbers ${a} and ${b} is <br>`,a+b)
}

function division(c,d){
    document.write(`quotient of the two numbers ${c} and ${d} is <br>`,c/d)
}

function multiply(x,y){
    document.write(`division of the two numbers ${x} and ${y} is <br>`,x*y)
}

function dosum(event){
    console.log("button clicked")
    event.preventdefualt();

    let firstNumber = document.querySelector("#firstnumber").value;
    let secondNumber = document.querySelector("#secondnumber").value
    console.log(firstnumber)
    console.log(secondNumber)
    let result = Number(firstNumber) + Number(secondNumber);
    console.log(result)
    let message = `the sum of ${firstNumber} and ${secondNumber} is ${result}`
    document.querySelector("#resultBox").innerHTML = message
}

//let message = `the sum of ${firstNumber} and ${secondNumber} is ${result}`;



let emails = ['aghanhussain@gmail.com', 'bobllo@yahoo.com',
              'khalil@gmail.com', 'ali@gmail.com']


function checkAddress(email) {
    let useremail = document.getElementById(email).value
    if ( useremail !== "") {

        if (emails.includes(useremail)){

        document.write(`Welcome: ${useremail}`)

        }
        else{
            alert("Invalid Email address")
        }



             
    }
    else{
        alert("Please enter a email address")
    }

 }