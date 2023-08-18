class basemap {
  constructor(name, img, x, y, districts) {
    this.name = name;
    this.img = img;
    this.x = x;
    this.y = y;
    this.districts = districts;
    this.percent = [];
    this.maps = HDMaps

    for (var i = 0; i < districts.length; i++) {
      var last = districts[i][4].length - 1;
      var mostLast = districts[i][4][last].length - 1;
      this.percent.push(parseInt(districts[i][4][last][mostLast][1].replace(/\./g, "")) /poblacionTotal );
      print("pop: " +districts[i][0] +"\t\t\t" + districts[i][4][last][mostLast][1] +"\t\t" +this.percent[i]);
    }
    for (var j = 0; j < districts[11][4].length-1; j++) {
      var prs = districts[11][4][j].length-1
      departamento[11][j].push(parseInt(districts[11][4][j][prs][1].replace(/\./g, "")) /1738929)
      
      print(districts[11][4][j][0][1] + "\t" + districts[11][4][j][prs][1] + "\t" + departamento[11][j][4])
    }
    
    
  }
  show(state) {
    imageMode(CENTER);
    if (state < 0) {
      image(this.img, this.x, this.y);
      for (var i = 0; i < this.districts.length; i++) {
        var nx = this.districts[i][1] * width;
        var ny = this.districts[i][2] * height;
        drawGraf(nx,ny,this.districts[i][3] * (width / (17 * 3)),this.percent[i]);
      }
    }else{
      image(HDMaps[state],this.x,this.y)
      if(state == 11){
        for (var j = 0; j < departamento[state].length; j++) {
        var ndx = departamento[state][j][1] * width;
        var ndy = departamento[state][j][2] * height;
        drawGraf(ndx,ndy,departamento[state][j][3] * (width / (17 * 3)),departamento[state][j][4] *(abs(scrolMin.val-scrolMax.val))/100);
         
      }
        
      }
      
    }
  }
}
