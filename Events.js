function gui() {
  fill('#3A405A');
  rect(width * 0.75, height / 2, width / 2, height);
  searchIndex.show();
  textAlign(LEFT)
  if (results.length > 0) {
    for (var i = 0; i < results.length; i++) {
      fill('#F8E9E9');
      if (mouseOver(width * 0.6, height * 0.2 + i * (height / 20),width/3,height /20)) {
        textSize(fontSize / 1.5);
        if(mouseIsPressed){
          state = results[i]
          renderBuffer = true
        }
      } else {
        textSize(fontSize / 2);
      }
      text(pais.districts[results[i]][0],width * 0.6,height * 0.2 + i * (height / 20) );
    }
  } else {
    textSize(fontSize / 1.5)
    text("Sin resultados",width * 0.6,height * 0.2  );
  }
  textAlign(CENTER)
   fill('#3A405A');
  rect(width * 0.75, height * 0.9, width / 2, height * 0.5);
  scrolMin.show()
  
  scrolMax.show()
  
  filtro.show()
  if(runAction.show()){
    renderBuffer = true    
  }
  
}

function mouseOver(x, y, xl, yl) {
  if (mouseX < x + xl / 2 && mouseX > x - xl / 2) {
    if (mouseY < y + yl / 2 && mouseY > y - yl / 2) {
      return true;
    }
  }
  return false;
}