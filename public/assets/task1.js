
$(document).ready(function(){
    var matrix=[[1,2,8,9],[1,4,7,2],[12,1,15,0]];
    var result=[];
     for(var i=0;i<matrix.length;i++){
         for(var j=0;j<matrix[i].length;j++){
            var array=[];
             if(j===0){
                 var array=[];
                 array.push(matrix[i][0]);
             }
             else{
                 if(matrix[i][0]+matrix[i][j]>=10){
                    array.push(0);
                 }else{
                    array.push(matrix[i][0]+matrix[i][j]);
                 }              
             }
             result.push(array);
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
  