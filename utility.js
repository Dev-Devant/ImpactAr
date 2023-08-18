var keyFlag = false;
var mouseFlag = false

class button {
  constructor(x, y,xl, yl, cl,txt) {
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.xl = xl;
    this.yl = yl;
    this.cl = cl;
  }

  show() {
    fill(this.cl);
    rect(this.x, this.y, this.xl, this.yl);
    fill(255);
    if(mouseOver(this.x, this.y, this.xl, this.yl)){
      textSize(width/50);     
      if(mouseIsPressed && !mouseFlag){
        mouseFlag = true
        return true         
      }
    }else{    
      textSize(width/60);
    }
    
    text(this.txt, this.x, this.y + this.yl/3);
    return false
  }
}

class searchBar {
  constructor(txt, x, y, xl, yl, cl) {
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.xl = xl;
    this.yl = yl;
    this.cl = cl;
    this.trs = 0;
    this.dx = 10;
    this.Selected = false;
  }
  show() {
    fill(this.cl);
    rect(this.x, this.y, this.xl, this.yl);
    fill(248,233,233, this.trs);
    textSize(fontSize);
    text(this.txt, this.x, this.y + height * 0.03);
    if (mouseIsPressed) {
      if (mouseOver(this.x, this.y, this.xl, this.yl)) {
        this.Selected = true;
        this.txt = "";
      } else {
        this.Selected = false;
      }
    }
    var filtered = keyCode == 13 || keyCode == 9 || keyCode == 17 || keyCode == 16 || keyCode == ALT || keyCode == 20;
    if ( this.Selected &&  !keyFlag &&  keyIsPressed &&   !filtered && this.txt.length < 10  ) {
      if(keyCode == 8 && this.txt.length >= 0){
         this.txt=this.txt.slice(0, -1);
         }else{
           this.txt += key;      
         }
      keyFlag = true;  
      
      if (state == -1) {
        search(Provincias, this.txt);
      }
    }

    this.trs += this.dx;

    if (this.trs < 0 || this.trs > 255) {
      this.dx *= -1;
    }

  }  
}

function search(list, src) {
  results = [];
  if(src == ""){
    return
  }
  src = src.toLowerCase();
  for (var j = 0; j < list.length; j++) {
    if (list[j][0].toLowerCase().includes(src)) {      
      results.push(j);
    }
  }
}
