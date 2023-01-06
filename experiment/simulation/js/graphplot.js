/* Lab:exp_1_Calibration of Inclined Tube Manometer using Askania Minimeter
	 File name: graphplot.js
   Author:Prakriti Dhang
*/

var dataPointai =[];

var xArray = [];
var yArray = [];
var xValues = [];
var yValues = [];

function showplot(){
    

        for (var tabrowindex = 0; tabrowindex < otable.rows.length; tabrowindex++) {
          var rwe1 = otable.rows[tabrowindex].cells;
          
      
          dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
         
      }
   
      
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 3,
        pointBackgroundColor: "black",
        data: dataPointai
      }]
    },
    options: {
        legend: {display: false},
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Inclined tube manometer'
            },
            ticks: {min: 0, max:60}
          }],

          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Askania reading'
            },
            ticks: {min: 0, max:170}
          }],
        },
        title: {
          display: true,
          text: 'Calibration'
        }
    }
    
  });
}
// Calculate Slope


function showbestfitg(){
  for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
    var rwe1 = otable.rows[tabrowindex].cells;
     
    //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
    xArray.push(parseFloat(rwe1[2].innerHTML));
    yArray.push(parseFloat(rwe1[1].innerHTML));
}

 
//var xArray = [1.2,3.2,5.2,6.2];
//var yArray = [0.10,10.2,20.1,30.2];
  // Calculate Slope
  var xSum = xArray.reduce(function(a, b){return a + b;}, 0);
  var ySum = yArray.reduce(function(a, b){return a + b;}, 0);
  var slope = ySum / xSum;
  
  // Generate values
  var xValues = [];
  var yValues = [];
  for (var x = 1; x <= 60; x += 1) {
    xValues.push(x);
    yValues.push(x * slope);
  }


  new Chart("myChart",{
type:"line",
data:{
  labels:xArray,
  datasets:[{
fill:false,
pointRadius:3,
borderColor:"black",
data: yValues
  

 
}]
},
options:{
  legend:{
    display:false},
    scales:{
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Inclined tube manometer'
        },
        ticks: {min: 0, max:60}
      }],
      yAxes: [{
        
        scaleLabel: {
          display: true,
          labelString: 'Askania manometer'
        },
        
        ticks: {min: 0, max:160}}]
    },
    title:{
      display:true,
      text: "Best Fit Graph",
    }
  }



  });
  
 /* var data = [
    {x:xArray, y:yArray, mode:"markers"},
    {x:xValues, y:yValues, mode:"line"}
  ];
  
  var layout = {
    xaxis: {range: [0, 60], title: "Inclined Manometer"},
    yaxis: {range: [0, 160], title: "Askania Minimeter"},  
    title: "Best Fit"
  };
  
  Plotly.newPlot("myChart", data, layout);*/

/*new Chart("myChart", {
type: "scatter",
data: {
datasets: [{
  pointRadius: 3,
  pointBackgroundColor: "black",
  data: [{
    x: xArray,
    y:yArray
    }],
},
{
type:"line",
 data:[{
    y:yValues
    }],

}],

},
options: {
  legend: {display: false},
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Inclined tube manometer'
      },
      ticks: {min: 0, max:60}
    }],

    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Askania reading'
      },
      ticks: {min: 0, max:160}
    }],
  },

  title:{
    display:true,
    text:'Best Fit'
  }
   
}

});*/
}