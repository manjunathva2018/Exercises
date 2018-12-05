
$(document).ready(function(){
  var matrix=[1,2,8,9,1,4,7,2,12,1,15,0,8];
  result=[];
  var index=0;
 for(var i=0;i<matrix.length;i++){
     if(i===0){
         result.push(matrix[0]);
     }
     else if(i===index+4){
         index=index+4;
         result.push(matrix[index]);
     }
     else{
        let ans=matrix[index]+matrix[i];
        if(ans<10){
             result.push(ans);
            }
        else{ 
            result.push(0);
        }
     }
 }
 
 console.log("result=",result);
 var tags="";

 for(var j=0;j<result.length;j++){
 
    tags+="<button class='btn btn-default'>"+result[j]+"</button>";
 
 }
 console.log("tags",tags)
 $('#content').html(tags);
})
