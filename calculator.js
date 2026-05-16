function calculate(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let answer = num1 + num2;

    document.getElementById("result").innerHTML =
    "Answer: " + answer;
}