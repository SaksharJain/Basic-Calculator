var a="",b="";
var p="",q=0;
var z=1;
function display(y){
if(z==1){
document.getElementById("demo").value="";z++;	
}
	document.getElementById("demo").value+=y
	 document.getElementById("demo").innerHTML=document.getElementById("demo").value;

  } 
function solve(){ 
 
 var x=eval(document.getElementById("demo").value);
 
  document.getElementById("demo").innerHTML=x;
   }
   function c(){ 
document.getElementById("demo").innerHTML=""

   }

