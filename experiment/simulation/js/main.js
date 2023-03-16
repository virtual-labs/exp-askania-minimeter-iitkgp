/*Lab: Mine Automation and Virtual Reality
   Exp :Calibration of Inclined Tube Manometer using Askania Minimeter
	 File name: main.js
   Author:Prakriti Dhang */

var obcount;
var count = 0;
var canvasc=7; /* inclned canvas count  */
var countbtnclk; /* count measure button click */
//var askaniah=2;
var canvasa=5; /*askania canvas count */
function pgload(){
    document.getElementById('prrel').style.display="none";
}

function showpanel(){
    document.getElementById('btninst').disabled=false;
    document.getElementById('obsno').style.display="block";
    document.getElementById('prrel').style.display="none";
    document.getElementById('yesbtn').disabled=true;
   // $("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    
}


function exitexp(){
   window.close();
}

function noexitexp(){
    $("#yesbtn").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
}


function preschngbtn(){
    document.getElementById('msbtn').disabled=false;
    document.getElementById('obbtn').disabled=true;
}


function clckmes() {
    obcount = document.getElementById('inpob').value; /* no.of observation */
    document.getElementById('obbtn').disabled=false;
    count++;
    
    countbtnclk=count;
    if(countbtnclk==obcount){
        document.getElementById('msbtn').disabled=true;
        document.getElementById('prrel').disabled=true;
    }
    else{
    for(countbtnclk; countbtnclk<=obcount; countbtnclk++ ){
       
        /* Askanina Minimeter reading */
    /*var myDiva = document.querySelector("#askaniamorgwh");
   var currHeighta = myDiva.clientHeight;
    myDiva.style.height = currHeighta -askaniah + "px";*/

    var ca = document.getElementById("myCanvasa");
    var ctxa = ca.getContext("2d");
    let centeraX = 0, centeraY = 78;
    ctxa.strokeStyle = '#fa6305';
    ctxa.lineWidth = 50;
    ctxa.beginPath();
    
    ctxa.moveTo(centeraX, centeraY-canvasa);    /*73  70   */
    
    
    ctxa.lineTo(0, 180);
    ctxa.stroke();
   
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 170;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, centerY-canvasc);   
    
    
    ctx.lineTo(2, 180);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
   }
}
canvasc+=3;
canvasa+=5;

 
}
    