
var isDigit = function(x){
  //checks if the number is a not a digit
  if (x.match(/[0-9]/)){
    return true;
  }
  else{
    return false;
  }
};

//jquery user interface
$(document).ready(function(){
  $("form#numerical").submit(function(event){
    event.preventDefault();
  var number=$("input#number").val();
  var result=isDigit(number);
  $("#result").text(result);
});
});
