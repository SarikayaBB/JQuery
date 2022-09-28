// var buttons = document.getElementsByTagName("button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     // document.getElementById("baslik").style.color = "red";
//     document.getElementsByTagName("h1")[0].style.color = "red";
//     setTimeout(function () {
//       document.getElementsByTagName("h1")[0].style.color = "black";
//     }, 700);
//   });
// }
// // document.getElementsByTagName("h1")[0].addEventListener("mouseover", function () {
// //   document.getElementsByTagName("h1")[0].style.color = "pink";
// //   setTimeout(function () {
// //     document.getElementsByTagName("h1")[0].style.color = "black";
// //   }, 500);
// // });

// $("button").click(function () {
//   $("button").css("color", "red");

//   $("button").animate({
//     left: "+=25px",
//     height: "+=15px",
//     width: "+=15px"
//   }),100,function(){
//     $("button").css("left-=15px");
//   }};

var inp = prompt("Kac buton?");

// $("h1").after(("'button*'+inp"));

for (let i = 1; i <= inp; i++) {
  $("div").append("<button id='btn-" + i + "'>Button"+i+"</button>");
  if (i % 2 == 0) {
    $("#btn-" + i).addClass("btn btn-danger btn-lg");
  } else {
    $("#btn-" + i).addClass("btn btn-primary btn-lg");
  }
  $("#btn-" + i).css("padding","5px");
}
