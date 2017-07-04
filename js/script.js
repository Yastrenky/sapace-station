var pilots =["Yastrenky Bravo"];

function pilotsAPI() {

  let urlsearch = "http://api.open-notify.org/astros.json"
  $.ajax({
    url: urlsearch,
    success: function(response) {

      for (let i = 0; i < response.people.length; i++) {
      pilots.push(response.people[i].name);
     }
    }
  })

}

console.log(pilotsAPI());

window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("background_space");
  var img_earth = document.getElementById("earth");
  ctx.drawImage(img, 0, 0);
  ctx.drawImage(img_earth, canvas.width / 2 - 250, canvas.height / 2 - 250, 400, 400);
};
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {

    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

        window.setTimeout(callback, 1000 / 60);

      };

  })();
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;


var station = function() {
  var img_sation = document.getElementById("station");

ctx.drawImage( img_sation, 0, 0, 80, 80);

ctx.font = "15px Comic Sans MS";
ctx.fillStyle = "white";
var cont=(-60);
for(var i = 0; i<pilots.length; i++){
  ctx.fillText(pilots[i], 70, cont);
cont+=30;
}

}
var i = 0;
var redraw = function() {
  ctx.save();
  var img = document.getElementById("background_space");
  var img_earth = document.getElementById("earth");
  ctx.drawImage(img, 0, 0);
  ctx.drawImage(img_earth, canvas.width / 2 - 200, canvas.height / 2 - 250, 400, 400);
  ctx.translate(canvas.width / 2 - 50, canvas.height / 2 - 50);
ctx.rotate(i / 200);
  ctx.translate(350, 0);
    ctx.rotate((-i) / 200);
  station();

  ctx.restore();

  i++;

  window.requestAnimationFrame(redraw);
};

window.requestAnimationFrame(redraw);
