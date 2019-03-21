$(document).ready(function(){
    $(".grid-container div").click(function(){
        $(this).css("background-color", "#a52a2a");
      });
      $(".grid-container div").dblclick(function(){
        $(this).css("background-color", "#0000FF");
      });
    $("button").click(function(){
        $(".grid-container div").css("background-color","antiquewhite")
    })
});