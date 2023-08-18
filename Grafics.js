/// colors

var blanco ="#F8E9E9" 
var azul = "#3A405A"
var amarillo = "#F5BB00"
var rojo = "#FF4B3E"

function drawGraf(x,y,rad,intens){
  noStroke()
  for(var i = 0; i<100;i++){
    var alfa = 1000 * intens
    if (alfa > 100){
      alfa = 140
    }
    fill(107,5,4,alfa)
    circle(x,y,rad / i)    
  }  
}