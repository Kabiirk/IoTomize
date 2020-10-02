var dataset = [];
async function getData(){
    var url = "https://parkingpoc.herokuapp.com/api/getinfo"
    var gdata = await fetch(url)
    const gdu = await gdata.json()
    console.log("Rreq data",gdu)

    gdu.forEach(element => {
        dataset.push(element.time)
        
    });
    console.log("dataset",dataset)
    return dataset
}
// var data = getData()

// console.log("data",data)

$(function () {

  'use strict';

  (function () {

    var aside = $('.side-nav'),

        showAsideBtn = $('.show-side-btn'),

        contents = $('#contents');

    showAsideBtn.on("click", function () {

      $("#" + $(this).data('show')).toggleClass('show-side-nav');

      contents.toggleClass('margin');

    });

    if ($(window).width() <= 767) {

      aside.addClass('show-side-nav');

    }
    $(window).on('resize', function () {

      if ($(window).width() > 767) {

        aside.removeClass('show-side-nav');

      }

    });

    // dropdown menu in the side nav
    var slideNavDropdown = $('.side-nav-dropdown');

    $('.side-nav .categories li').on('click', function () {

      $(this).toggleClass('opend').siblings().removeClass('opend');

      if ($(this).hasClass('opend')) {

        $(this).find('.side-nav-dropdown').slideToggle('fast');

        $(this).siblings().find('.side-nav-dropdown').slideUp('fast');

      } else {

        $(this).find('.side-nav-dropdown').slideUp('fast');

      }

    });

    $('.side-nav .close-aside').on('click', function () {

      $('#' + $(this).data('close')).addClass('show-side-nav');

      contents.removeClass('margin');

    });

  }());

  // Start chart

  var chart = document.getElementById('myChart');
  Chart.defaults.global.animation.duration = 2000; // Animation duration
  Chart.defaults.global.title.display = false; // Remove title
  Chart.defaults.global.title.text = "Chart"; // Title
  Chart.defaults.global.title.position = 'bottom'; // Title position
  Chart.defaults.global.defaultFontColor = '#999'; // Font color
  Chart.defaults.global.defaultFontSize = 10; // Font size for every label

  // Chart.defaults.global.tooltips.backgroundColor = '#FFF'; // Tooltips background color
  Chart.defaults.global.tooltips.borderColor = 'white'; // Tooltips border color
  Chart.defaults.global.legend.labels.padding = 0;
  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.scale.gridLines.zeroLineColor = 'rgba(255, 255, 255, 0.1)';
  Chart.defaults.scale.gridLines.color = 'rgba(255, 255, 255, 0.02)';

  Chart.defaults.global.legend.display = false;

  var myChart = new Chart(chart, {
    type: 'bar',

    data: {
      title: "hello",
      labels: ["Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [{
        label: "Value",
        fill: false,
        lineTension: 0,
        startAngle: 2,
        data: [20, 40, 20, 45, 25, 69, 40],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#ff6384",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }]
    }
  });
  //  Chart ( 2 )


  var Chart2 = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(Chart2, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", 'May', 'June', 'July', 'August','September','October','November','December'],
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 79, 116)',
        borderWidth: 2,
        pointBorderColor: false,
        data: [5, 10, 5, 8, 20, 30, 20, 10, 10, 13, 7, 8],
        fill: false,
        lineTension: .4,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: [20, 14, 20, 25, 10, 15, 25, 10, 10, 13, 7, 8],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: [40, 20, 5, 10, 30, 15, 15, 10, 10, 13, 7, 8],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#ffcd56",
        borderColor: '#ffcd56',
        borderWidth: 2,
        showLine: true,
      }]
    },

    // Configuration options
    options: {
      title: {
        display: false
      }
    }
  });


  console.log(Chart.defaults.global);

  var chart = document.getElementById('chart3');
  var myChart = new Chart(chart, {
    type: 'line',
    data: {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], //green
      datasets: [{
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointBorderColor: "transparent",
        pointColor: "white",
        borderColor: '#d9534f',
        borderWidth: 0,
        showLine: true,
        data: [0, 40, 10, 30, 10, 20, 15, 20, 10, 20, 15,20,23,22,13,11,25,35,33,21,9,10,11,4], //red
        pointBackgroundColor: 'transparent',
      },{
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointColor: "white",
        borderColor: '#5cb85c',
        borderWidth: 0,
        showLine: true,
        data: [40, 0, 20, 10, 25, 15, 30, 0, 20, 10, 25, 15,34,4,12,23,12,32,22,12,32,11,9,8,7,4,7,0], //blue
        pointBackgroundColor: 'transparent',
      },
      {
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointColor: "white",
        borderColor: '#f0ad4e',
        borderWidth: 0,
        showLine: true,
        data: [10, 40, 20, 5, 35, 15, 35, 0, 35, 15, 35, 0,1,4,5,8,9,10,11,34,33,21,22,21],//yellow
        pointBackgroundColor: 'transparent',
      },
      {
        label: "Lost",
        fill: false,
        lineTension: .5,
        pointColor: "white",
        borderColor: '#337ab7',
        borderWidth: 0,
        showLine: true,
        data: [0, 30, 10, 25, 10, 40, 20, 0, 30, 10, 25, 30,33,35,22,1,21,24,2,27,26,29,30,12],
        pointBackgroundColor: 'transparent',
      }]
    },
  });

});




var ctx = document.getElementById("donut").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Q1",	"Q2",	"Q2",	"Q3"],
        datasets: [{    
            data: [500,	500,	2424,	4040], // Specify the data values array
          // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
            backgroundColor: ['#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'], // Add custom color background (Points and Fill)
            borderWidth: 0 // Specify bar border width
        }]},
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
          }      
});




function b1click(){
  var x = document.getElementById('b1')
  if(x.innerHTML == "Led is OFF"){
    x.innerHTML = "Led is ON"
  }
  else{
    x.innerHTML = "Led is OFF"
  }

}
function b2click(){
  var x = document.getElementById('b2')
  if(x.innerHTML == "Led is OFF"){
    x.innerHTML = "Led is ON"
  }
  else{
    x.innerHTML = "Led is OFF"
  }

  fetch.post('')

}
function b3click(){
  var x = document.getElementById('b3')
  if(x.innerHTML == "Led is OFF"){
    x.innerHTML = "Led is ON"
  }
  else{
    x.innerHTML = "Led is OFF"
  }

}
function b4click(){
  var x = document.getElementById('b4')
  if(x.innerHTML == "Led is OFF"){
    x.innerHTML = "Led is ON"
  }
  else{
    x.innerHTML = "Led is OFF"
  }

}

async function makedev(){
  var da = {
    "DeviceName": 'dd2',
    "time":[0],
    "status": "false"
  }
  const rawResponse = await fetch('http://localhost:8080/api/createdevice', {
    method: 'POST', // or 'PUT'
    mode: 'cors',
    body: JSON.stringify(da),
  })
  const content = await rawResponse.json();
  console.log("posted",content)
}



async function pltdata(){
  var data = await fetch('http://localhost:8080/api/devdata')
  const pltd = await data.json()
  var xa = []
  for(i=1;i<=pltd.length;i++){
    xa.push(i)
  }
  var finda = []
  pltd.forEach(element => {
    finda.push(element.time)
  });
  console.log("findsa",finda)

  var Chart2 = document.getElementById('myChartplt').getContext('2d');
  var chart = new Chart(Chart2, {
    type: 'line',
    data: {
      labels: xa,
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 79, 116)',
        borderWidth: 2,
        pointBorderColor: false,
        data: finda[xa.length - 3],
        fill: false,
        lineTension: .4,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: finda[xa.length - 2],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#4bc0c0",
        borderColor: '#4bc0c0',
        borderWidth: 2,
        showLine: true,
      }, {
        label: "Month",
        fill: false,
        lineTension: .4,
        startAngle: 2,
        data: finda[xa.length - 1],
        // , '#ff6384', '#4bc0c0', '#ffcd56', '#457ba1'
        backgroundColor: "transparent",
        pointBorderColor: "#ffcd56",
        borderColor: '#ffcd56',
        borderWidth: 2,
        showLine: true,
      }]
    },

    // Configuration options
    options: {
      title: {
        display: false
      }
    }
  });

  

}

pltdata()