function add(){
    var num1 = parseInt(document.getElementById("enter1").value);
    var num2 = parseInt(document.getElementById("enter2").value);
    sum = num1+num2;
    console.log(sum);
    document.getElementById("answer").value = sum;
}
function subtract(){
    var num1 = parseInt(document.getElementById("enter1").value);
    var num2 = parseInt(document.getElementById("enter2").value);
    diff = num1-num2;
    console.log(diff);
    document.getElementById("answer").value = diff;
    
}
function mul(){
    var num1 = parseInt(document.getElementById("enter1").value);
    var num2 = parseInt(document.getElementById("enter2").value);
    mul = num1*num2;
    console.log(mul);
    document.getElementById("answer").value = mul;
    
}
function div(){
    var num1 = parseFloat(document.getElementById("enter1").value);
    var num2 = parseFloat(document.getElementById("enter2").value);
    div = num1/num2;
    console.log(div);
    document.getElementById("answer").value = div;
    
}