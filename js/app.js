// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("linked")
  // all code to manipulate the DOM
  // goes inside this function
  //make grids create a value on a click
  let clickCount = 0;
  $("#box-1").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0) {
      $("#box-1").append(`<div id="box-1">${"X"}</div>`)
    } else {
      $("#box-1").append(`<div id="box-1">${"O"}</div>`)
    };
  });
  $("#box-2").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0){
      console.log("is empty")
      $("#box-2").append(`<div id="box-2">${"X"}</div>`)
    } else {
      $("#box-2").append(`<div id="box-2">${"O"}</div>`)
    };
  });
  $("#box-3").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-3").empty()){
      $("#box-3").append(`<div id="box-3">${"X"}</div>`)
    } else {
      $("#box-3").append(`<div id="box-3">${"O"}</div>`)
    };
  });
  $("#box-4").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-4").empty()){
      $("#box-4").append(`<div id="box-4">${"X"}</div>`)
    } else {
      $("#box-4").append(`<div id="box-4">${"O"}</div>`)
    };
  });
  $("#box-5").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-5").empty()){
      $("#box-5").append(`<div id="box-5">${"X"}</div>`)
    } else {
      $("#box-5").append(`<div id="box-5">${"O"}</div>`)
    };
  });
  $("#box-6").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-6").empty()){
      $("#box-6").append(`<div id="box-6">${"X"}</div>`)
    } else {
      $("#box-6").append(`<div id="box-6">${"O"}</div>`)
    };
  });
  $("#box-7").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-7").empty()){
      $("#box-7").append(`<div id="box-7">${"X"}</div>`)
    } else {
      $("#box-7").append(`<div id="box-7">${"O"}</div>`)
    };
  });
  $("#box-8").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-8").empty()){
      $("#box-8").append(`<div id="box-8">${"X"}</div>`)
    } else {
      $("#box-8").append(`<div id="box-8">${"O"}</div>`)
    };
  });
  $("#box-9").on("click",function(){
    clickCount ++
    if (clickCount % 2 === 0 && $("box-9").empty()){
      $("#box-9").append(`<div id="box-9">${"X"}</div>`)
    } else {
      $("#box-9").append(`<div id="box-9">${"O"}</div>`)
    };
  });
  console.log($("#box-1").length);
});
