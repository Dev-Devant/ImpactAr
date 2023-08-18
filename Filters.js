class slider{
  constructor(x,y,xl,yl,c,defv, leyend){
    this.x = x
    this.y = y
    this.xl = xl
    this.yl = yl
    this.c = c    
    this.val = int(defv)
    this.txt = leyend
  }  
  show(){
    fill(this.c)
    noStroke()
    rect(this.x,this.y,this.xl,this.yl)    
    
    fill('#F8E9E9');
    rect(this.x+this.val * (this.xl/100)-this.xl/2,this.y,(this.xl/100),this.yl)
    if(mouseOver(this.x,this.y,this.xl,this.yl) && mouseIsPressed){
        this.val = int( dist(mouseX,mouseY,this.x - this.xl/2,this.y)/(this.xl/100) )
       renderBuffer = true
    }
    textSize(width/60)
    textAlign(RIGHT)
    text(this.txt+" " + this.val,this.x - this.xl/2 - 10,this.y+this.yl/3)
    textAlign(CENTER)
    return this.val
  }
  
  
  
}

class selector{
  constructor(x,y,xl,yl,c,list){
    this.x = x
    this.y = y
    this.xl = xl
    this.yl = yl
    this.c = c    
    this.txt = list  
    this.current = 0
    this.back = new button(x-xl/2 - yl,y,yl,yl,c,"<")
    this.next = new button(x+xl/2 + yl,y,yl,yl,c,">")
  }
  show(){
    fill(this.c)
    noStroke()
    rect(this.x,this.y,this.xl,this.yl)    
    
    fill('#F8E9E9');
    textSize(width/60)
    text(this.txt[this.current],this.x,this.y +this.yl/3)
    if(this.back.show()){
       this.current --
      if(this.current <0){
        this.current = this.txt.length-1
      }
      currentParameter = this.txt[this.current]
    }
    if(this.next.show()){
       this.current ++
      if(this.current > this.txt.length-1){
        this.current = 0
      }
      currentParameter = this.txt[this.current]
    }
    
  }  
}