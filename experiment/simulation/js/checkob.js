/* Lab:exp_1_Calibration of Inclined Tube Manometer using Askania Minimeter
	 File name: checkob.js
   Author:Prakriti Dhang
*/
var checkrng;

function checkobn(){
 checkrng = document.getElementById('inpob').value;
 
 if (   4 <= checkrng && checkrng <=20  ){
     document.getElementById('measure').style.display='block';
     document.getElementById('prrel').style.display="none";
     document.getElementById('obokbtn').disabled=true;
     document.getElementById('inpob').readOnly=true;
    
 } 
 else if(checkrng == ''){
  //alert("Enter value between 4 and 20")
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="You cannot keep the space empty. Enter value between 4 and 20";

    
 } 
else if(checkrng<4){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter greater than 4";
}

else if(checkrng>20){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter lesser than 20";
}

else{
   // alert("Take any value between 4 and 20");
   document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter any value between 4 and 20";
    //document.getElementById('measure').style.display='none';
}

}

function alertmsg(){
    document.getElementById('measure').style.display='none';
    document.getElementById("checkobsn").style.display = "none";
    document.getElementById("checkobsn").classList.remove("show");
    document.getElementById('obbtn').disabled=false;
    
}