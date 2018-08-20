//This code was generated bia the Canvas-Watches tool by Evan Simon Ross
//More info at https://github.com/evansimonross/Canvas-Watches

var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); } }
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
setInterval(drawClock, 10);
var var_tens = [0, -63.2, -31.6, 0, 31.6, 63.2]

var now;
var year;
var month;
var date;
var day;
var hour;
var minute;
var second;
var millisecond;
var dh;
var dm;

function drawClock() {
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth();
  date = now.getDate();
  day = now.getDay();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  millisecond = now.getMilliseconds();
  dh = hour === 0 ? 12 : hour % 12;
  dm = minute;

  drawFace();
  drawComponents();
  cutOut();
}

function cutOut() { 
  ctx.save(); 
  ctx.translate(-radius, -radius); 
  ctx.globalCompositeOperation = "destination-in";
  ctx.beginPath(); 
  ctx.arc(radius, radius, radius, 0, 2 * Math.PI); 
  ctx.fill(); 
  ctx.restore(); 
}

function drawFace() {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function drawTriangle(x,y,w,h,ang,color,opacity) {
  x*=(canvas.width/512);
  y*=(canvas.width/512);
  w*=(canvas.width/512);
  h*=(canvas.width/512);
  ctx.save();
  ctx.globalAlpha = opacity/100;
  ang = math.rad(ang);
  ctx.translate(x,y);
  ctx.rotate(ang);
  ctx.beginPath();
  ctx.moveTo(0, -1*(h/2));
  ctx.lineTo(w/2, h/2);
  ctx.lineTo(-1*(w/2), h/2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.rotate(-ang);
  ctx.translate(-x,-y);
  ctx.restore();
}

function adjustTriangleHeight(unadjusted) {
  return unadjusted * Math.sqrt(3) / 2;
}

function drawGradientLinear(start,end,rotation,scale,length) {
  length*=(canvas.width/512);
  scale = (100-scale)/100;
  var grd = ctx.createLinearGradient(-length/2, -length/2, -length/2, length/2);
  grd.addColorStop(0, start);
  grd.addColorStop(scale/2, start);
  grd.addColorStop(1-(scale/2), end);
  grd.addColorStop(1, end);
  return grd;
}

function drawComponents() {
  drawTriangle((130*math.sin(-79)), (-130*math.cos(-79)), 100, adjustTriangleHeight(300), 101, drawGradientLinear("#4629a1", (dh>0) && (dh<7) ? "#d6e8f8" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(-47.4)), (-130*math.cos(-47.4)), 100, adjustTriangleHeight(300), 132.6, drawGradientLinear("#4629a1", (dh>1) && (dh<8) ? "#d6e8f8" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(-15.8)), (-130*math.cos(-15.8)), 100, adjustTriangleHeight(300), 164.2, drawGradientLinear("#4629a1", (dh>2) && (dh<9) ? "#d6e8f8" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(15.8)), (-130*math.cos(15.8)), 100, adjustTriangleHeight(300), 195.8, drawGradientLinear("#4629a1", (dh>3) && (dh<10) ? "#d6e8f8" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(47.4)), (-130*math.cos(47.4)), 100, adjustTriangleHeight(300), 227.4, drawGradientLinear("#4629a1", (dh>4) && (dh<11) ? "#d6e8f8" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(79)), (-130*math.cos(79)), 100, adjustTriangleHeight(300), 259, drawGradientLinear("#4629a1", (dh>5) && (dh<12) ? "#d6e8f8" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(243.2)), (-130*math.cos(243.2)), 45, adjustTriangleHeight(300), 63.2, drawGradientLinear("#be1717", ((dm%10)>0) && ((dm%10)<6) ? "#fac4c4" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(211.6)), (-130*math.cos(211.6)), 45, adjustTriangleHeight(300), 31.6, drawGradientLinear("#be1717", ((dm%10)>1) && ((dm%10)<7) ? "#fac4c4" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(180)), (-130*math.cos(180)), 45, adjustTriangleHeight(300), 0, drawGradientLinear("#be1717", ((dm%10)>2) && ((dm%10)<8) ? "#fac4c4" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(148.4)), (-130*math.cos(148.4)), 45, adjustTriangleHeight(300), -31.6, drawGradientLinear("#be1717", ((dm%10)>3) && ((dm%10)<9) ? "#fac4c4" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(116.8)), (-130*math.cos(116.8)), 45, adjustTriangleHeight(300), -63.2, drawGradientLinear("#be1717", ((dm%10)>4) && ((dm%10)<10) ? "#fac4c4" : "#000000", 0, 70, adjustTriangleHeight(300)), 100);
  drawTriangle((130*math.sin(var_tens[math.floor((dm/10))])), (-130*math.cos(var_tens[math.floor((dm/10))])), 45, adjustTriangleHeight(300), (180+var_tens[math.floor((dm/10))]), drawGradientLinear("#fac4c4", "#000000", 0, 70, adjustTriangleHeight(300)), (math.floor((dm/10))!=0) ? 100 : 0);
}

