$(document).ready(function(){
var array=[1,2,3,7,12,15,17,18,0];
var result=[];
for(var i=0;i<array.length;i++){
    if(i!==0){
    let operand1=array[i-1];
    let operand2=array[i];
    let add=operand1+operand2;
    let sub=operand1-operand2;
    let mult=operand1*operand2;
    let div=operand1/operand2;
    if(add===32 || sub===32 || mult===32 || div===32){
        result.push("<tr><td>"+operand1+"</td><td>"+operand2+"</td><td>true</td></tr>")
    }
    console.log("first operand=%s,second operand=%s,add=%s,sub=%s,mult=%s,div=%s",operand1,operand2,add,sub,mult,div)
    }
}
$("#content").html(result);
});