
  //checks if the number is a not a digit
  var isDigit=function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }
//jquery user interface
$(document).ready(function(){
  $("form#numerical").submit(function(event){
    event.preventDefault();
  var number=parseInt($("input#number").val());
  if(String(number).match(/[0-9]/)){
    var result=isDigit(number);
    $("#result").text(result);
  }
  else{
    return "its not a number";
  }
});
});
