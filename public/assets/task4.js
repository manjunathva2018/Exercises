
$(document).ready(function(){
    var matrix=[[0,1],[2,3],[5,6,8]];
    var result=[];
     for(var i=0;i<matrix.length;i++){
         var data="";
         for(var j=0;j<matrix[i].length;j++){
             if(j+1==matrix[i].length){
           data+=matrix[i][j];
         }else{
             data+=matrix[i][j]+"-";
         }
     }
     result.push(data);
    }

   console.log("result=",result);
   var tags="";
  
   for(var j=0;j<result.length;j++){
   
      tags+="<button class='btn btn-default'>"+result[j]+"</button>";
   
   }
   console.log("tags",tags)
   $('#content').html(tags);
  })
  