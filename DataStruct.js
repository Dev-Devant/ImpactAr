let Provincias = [
["Buenos Aires"       ,0.3029, 0.4250,4,[]],//00
["Catamarca"          ,0.2112, 0.2026,2,[]],//01
["Cordoba"            ,0.2429, 0.3327,2,[]],//04  
["Corrientes"         ,0.3047, 0.2453,2,[]],//05
["Chaco"              ,0.2722, 0.1821,2,[]],//02
["Chubut"             ,0.1917, 0.6505,3,[]],//03
["Entre Rios"         ,0.2909, 0.3159,2,[]],//06
["Formosa"            ,0.2828, 0.1319,2,[]],//07
["Jujuy"              ,0.2234, 0.0873,1,[]],//08
["La Pampa"           ,0.2258, 0.4702,2,[]],//09
["La Rioja"           ,0.2071, 0.2583,2,[]],//10
["Mendoza"            ,0.1941, 0.3828,2,[]],//11
["Misiones"           ,0.3381, 0.1858,1,[]],//12
["Neuquen"            ,0.1819, 0.4981,2,[]],//13
["Rio Negro"          ,0.2079, 0.5501,3,[]],//014
["Salta"              ,0.2291, 0.1468,2,[]],//015
["San Juan"           ,0.9981, 0.2492,2,[]],//016
["San Luis"           ,0.1941, 0.3048,2,[]],//017
["Santa Cruz"         ,0.1795, 0.7695,3,[]],//018
["Santa Fe"           ,0.2697, 0.3234,2,[]],//019
["Santiago del Estero",0.2437, 0.2323,2,[]],//020  
["Tucuman"            ,0.2274, 0.1840,1,[]], //022
["Tierra del Fuego"   ,0.2030, 0.9219,1,[]]//021
]

let departamento = [
["Buenos Aires"       ,],//00
["Catamarca"          ,],//01
["Cordoba"            ,],//04  
["Corrientes"         ,],//05
["Chaco"              ,],//02
["Chubut"             ,],//03
["Entre Rios"         ,],//06
["Formosa"            ,],//07
["Jujuy"              ,],//08
["La Pampa"           ,],//09
["La Rioja"           ,],//10
[
  /////////// Mendoza
["Capital"        ,0.2242, 0.1821 ,1],
["General Alvear ",0.3593, 0.5477 ,2],
["Godoy Cruz"     ,0.2242, 0.1895 ,1],
["Guaymallén"     ,0.2362, 0.1796 ,1],
["Junín"          ,0.2508, 0.2205 ,1],
["La Paz"         ,0.3430, 0.2135 ,3],
["Las Heras"      ,0.2117, 0.1412 ,2],
["Lavalle"        ,0.2898, 0.1226 ,3],
["Luján de Cuyo"  ,0.2177, 0.2230 ,2],
["Maipú"          ,0.2405, 0.2007 ,1],
["Malargüe"       ,0.1873, 0.6691 ,3],
["Rivadavia"      ,0.2459, 0.2565 ,2],
["San Carlos"     ,0.2661, 0.3618 ,2],
["San Martín"     ,0.2671, 0.1908 ,2],
["San Rafael"     ,0.2557, 0.5216 ,3],
["Santa Rosa"     ,0.2898, 0.2973 ,3],
["Tunuyán"        ,0.1787, 0.2986 ,2]

],//////////"Mendoza"
["Misiones"           ,],//12
["Neuquen"            ,],//13
["Rio Negro"          ,],//014
["Salta"              ,],//015
["San Juan"           ,],//016
["San Luis"           ,],//017
["Santa Cruz"         ,],//018
["Santa Fe"           ,],//019
["Santiago del Estero",],//020  
["Tucuman"            ,], //022
["Tierra del Fuego"   ,]//021
  
  
  
]

let databaseEdad = []

var poblacionTotal = 40790000

function extractDataBase(){
  
  let database = [], dataRef = []
  var columnCount = indecDB.getColumnCount()

  for (var i = 0; i < columnCount; i++) {
    let age  = indecDB.getColumn(i);    
    let data = indecDB.getColumn(i+1);  
    i++
    database.push(data)
    dataRef.push(age)
  }
  for (var j = 0;j<Provincias.length;j++){
    Provincias[j][4] = spliter(dataRef[j],database[j],"AREA","Total") 
  }        

}

function spliter(arr,subarr, open,close) {
 
  let sublist = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(open)) {
      var aux = []
      aux.push([arr[i],subarr[i]])
      for (;;) {    
        aux.push([arr[i],subarr[i]])
        i++;
        if(arr[i].includes(close)){          
          aux.push([arr[i],subarr[i]])
          sublist.push(aux)
          break;
        }    
      }     
    }
    if(arr[i+1] =="" &arr[i+2] ==""){
       break
       }
  }


  return sublist;
}
