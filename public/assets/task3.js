$(document).ready(function(){
    $("#errmsg1").hide();
   
    $("table").hide();
    $("#ex1").keypress(function (e) {
if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
$("#errmsg1").show();
       return false;
}else{
    $("#errmsg1").hide();   
}
})
function fact(x) {
    if(x==0) {
       return 1;
    }
    return x * fact(x-1);
 }
 function reverseNumber(no)
{
	var number = no.toString();
	return number.split("").reverse().join("");
}

$("#cal").click(function(e){
e.preventDefault();
var operand1=Number($('#ex1').val());
var even=false;
var odd=false;
var factorial=fact(operand1);
var palindrome=false;
var checkPalindrome=reverseNumber(operand1);
if(operand1%2===0){
    even=true;
}else{
    odd=true;
}
if(Number(checkPalindrome)===operand1){
    palindrome=true;
}

$('#content').html("<tr><td>Even</td><td>"+even+"</td></tr><tr><td>Odd</td><td>"+odd+"</td></tr><tr><td>Factorial</td><td>"+factorial+"</td></tr><tr><td>Palindrome</td><td>"+palindrome+"</td></tr><tr><td>Fibonacci</td><td></td></tr>");
$("table").show();
})

})