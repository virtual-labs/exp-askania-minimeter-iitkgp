/* Lab:exp_1_Calibration of Inclined Tube Manometer using Askania Minimeter
	 File name: addinptotable.js
   Author:Prakriti Dhang
*/

var obn, aska, incl, otable;
var arr=[];
var tabrowindex=0;
var nofob ;
var rows,x;

function addresult(){
  //alert("change the pressure");
  document.getElementById('obvtable1').style.display="block";
    obn = document.getElementById('obsvno').value;
      //alert(obn);
    aska = document.getElementById('askaread').value;
      //alert(aska);
      incl = document.getElementById('incldread').value;
     // alert(incl);

   if(obn==''){
  alert('Cannot be empty');
}
     else if(aska==''){
      alert('Askania reading cannot be empty');
     }
     else if(incl==''){
      alert('Inclined reading cannot be empty');
     }
else if(aska=='' && incl==''){
 alert('Askania and Inclined readings cannot be empty');

}
      else{
 otable= document.getElementById('obtable');

 arr[0] =obn;
 arr[1] =aska;
 arr[2]=incl;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 3; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of askania and inclined; */
    document.getElementById('askaread').value='';
    document.getElementById('incldread').value='';
    nofob = document.getElementById('inpob').value;
    var valueob = parseInt(document.getElementById('obsvno').value, nofob);
        valueob = isNaN(valueob) ? 0 : valueob;
        valueob++;
        document.getElementById('obsvno').value = valueob;
        
   

    /* show  graph card when no of ob is matching with the obs table */ 
    
    
  rows = otable.rows;
  for (i = 1; i < (rows.length ); i++) {
   
    x = rows[i].getElementsByTagName("td")[0];
   
    if (Number(x.innerHTML) == nofob) {
        document.getElementById('graphd').style.display="block";
        document.getElementById('obsvno').value = '';
        document.getElementById('msbtn').disabled=true;
        document.getElementById('prrel').style.display="none";
    }
    else if(Number(x.innerHTML) < nofob) {
        document.getElementById('graphd').style.display="none";
        document.getElementById('prrel').style.display="block";
      }
  }
 
   document.getElementById('obbtn').disabled=true;
  

    /* scroll down */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);

}

    }

    

       
       
       
      


/*function alertmsgob(){
  document.getElementById("obtblnum").style.display = "none";
  document.getElementById("obtblnum").classList.remove("show");
  
}*/