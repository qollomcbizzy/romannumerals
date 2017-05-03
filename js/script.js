
var isDigit = function(x){
  //checks if the number is a non alphanumeric

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
