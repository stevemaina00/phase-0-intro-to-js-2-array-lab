// Write your solution here!

// const cats = ["Milo", "Otis", "Garfield"];



// cats
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
   }


 function destructivelyPrependCat(Bob){
   cats.unshift(Bob);
   return cats;
 }
 
 function destructivelyRemoveLastCat(){
   cats.pop();
   return cats
 }
 
 function destructivelyRemoveFirstCat(){
   cats.shift();
   return cats;
 }

function appendCat(name){
    var name0= [...cats,name];
    return name0;
  }
  
  function prependCat(name){
    var name1=[name, ...cats];
    return name1
  }
  
  function removeLastCat(){
    var cats00= cats.slice(0,cats.length-1);
    return cats00;
  }
  
  function removeFirstCat(){
    var cats00= cats.slice(1)
    return cats00
  }
 
  var cats = ["Milo", "Otis", "Garfield"];
  function destructivelyAppendCat(Ralph){
      cats.push(Ralph)
      return cats
     }
  
  
   function destructivelyPrependCat(Bob){
     cats.unshift(Bob);
     return cats;
   }
   
   function destructivelyRemoveLastCat(){
     cats.pop();
     return cats
   }
   
   function destructivelyRemoveFirstCat(){
     cats.shift();
     return cats;
   }
  
  function appendCat(name){
      var name0= [...cats,name];
      return name0;
    }
    
    function prependCat(name){
      var name1=[name, ...cats];
      return name1
    }
    
    function removeLastCat(){
      var cats00= cats.slice(0,cats.length-1);
      return cats00;
    }
    
    function removeFirstCat(){
      var cats00= cats.slice(1)
      return cats00
    }
   
   

  










