var fontSize;
var renderBuffer = true;
let Argentina, pais, HDMaps = [];
var state = -1;
let results = [];
let indecDBAge
let scrolMin,scrolMax, filtro, runAction
var currentParameter = "Edad"

// estados Main (pais) provincia y sub el nombre

function preload() {
  Argentina = loadImage("Data/Argentina.png");
  for (var i = 0;i<Provincias.length;i++){
    HDMaps.push(loadImage("Data/Prov HD/"+Provincias[i][0]+".png"))
  }
  indecDB = loadTable('Data/Stats/EdadInfo.csv', 'csv', 'header')
}

function setup() {
  var y = windowWidth*0.9 / (16 / 7);
  createCanvas(windowWidth*0.9, y);
  fontSize = windowWidth*0.9 / 30;
  /////////////////////////////////
  extractDataBase()

  for (var i = 0;i<HDMaps.length;i++){
    var mapRes = (height * 0.95 * HDMaps[i].width) / HDMaps[i].height;
    HDMaps[i].resize(mapRes, height * 0.95)
  
  }
  
  
  /////////////////////////////////
  var argResx = (height * 0.95 * Argentina.width) / Argentina.height;

  Argentina.resize(argResx, height * 0.95);
   pais = new basemap("Argentina", Argentina, width / 4, height / 2,Provincias);
  
  /////////// inputs
  searchIndex = new searchBar("Buscar...",width * 0.75,height * 0.1,width / 3,height * 0.1,"#F5BB00");
  scrolMin = new slider(width * 0.75,height * 0.77,width / 5, height * 0.05,"#F5BB00",0,"Edad min: ")
  
  scrolMax = new slider(width * 0.75,height * 0.83,width / 5, height * 0.05,"#F5BB00",100,"Edad max: ")
  //txt,x,y,xl,yl,cl,sl
  let parametros = []
  parametros.push("Edad")
  parametros.push("Educacion")
  parametros.push("Vivienda")
  
  filtro = new selector(width * 0.75,height * 0.7,width / 7, height * 0.05,"#F5BB00",parametros)
  runAction = new button (width * 0.75,height * 0.9,width / 6, height * 0.05,"#F5BB00","Actualizar grafica")
  
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  //////////// menu de entrada
  if (renderBuffer) {
    background('#3A405A');
    strokeWeight(width/1000)
    stroke('#F8E9E9');
    line(width / 2, 0, width / 2, height);
    tint('#F8E9E9')
    pais.show(state)
    noTint()
    renderBuffer = false;
    noStroke()
    textAlign(CENTER)
  }
  //////
  gui();
 
}

function windowResized() {
  var y = windowWidth / (16 / 9);
  createCanvas(windowWidth, y);
}

function keyReleased(){
  keyFlag = false;  
}
function mouseReleased(){
  mouseFlag = false
}
/*
function mousePressed(){
  var sx = mouseX/width
  var sy = mouseY/height
  fill(0)
  rect(width/4,20,width/2,80)
  fill(255)
  text(sx + "\n" + sy,width/4,20)
  
  
  
}
*/