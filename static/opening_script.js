var numberOfCat = 3;




var hover = document.getElementById("hover");

var hovermasksvg1 = document.getElementById("hover-mask-svg1");
var hovermasksvg2 = document.getElementById("hover-mask-svg2");
var hovermasksvg3 = document.getElementById("hover-mask-svg3");

var r = document.querySelector(":root");

var height1= (Math.floor(Math.random() * 66) + 5) + 'vh';
var height2= (Math.floor(Math.random() * 66) + 5) + 'vh';
var height3= (Math.floor(Math.random() * 56) + 10) + 'vh';

var width1= (Math.floor(Math.random() * 61) + 5) + 'vw';
var width2= (Math.floor(Math.random() * 61) + 5) + 'vw';
var width3= (Math.floor(Math.random() * 61) + 5) + 'vw';


r.style.setProperty("--visibility", "visible");

r.style.setProperty("--height1", height1);
r.style.setProperty("--height2", height2);
r.style.setProperty("--height3", height3);

r.style.setProperty("--width1", width1);
r.style.setProperty("--width2", width2);
r.style.setProperty("--width3", width3);




hovermasksvg1.onclick = function () {
  var masksvg1 = document.getElementById("mask-svg1");
  var masksvg2 = document.getElementById("mask-svg2");
  var masksvg3 = document.getElementById("mask-svg3");
  var hover = document.getElementById("hover");
  var container1 = document.getElementById("container1");

  if (masksvg1.classList.contains("animation1-reverse")) {
    masksvg1.classList.replace("animation1-reverse", "animation1");

    r.style.setProperty("--visibility", "hidden");
    masksvg2.style.visibility = "hidden";
    masksvg3.style.visibility = "hidden";

    console.log("add animation class and change shop to close");

    hover.classList.replace("shop", "close");
    container1.classList.replace("open", "close");

  } else if (masksvg1.classList.contains("animation1")) {
    masksvg1.classList.replace("animation1", "animation1-reverse");

    setTimeout(function () {
      container1.classList.replace("close", "open");
      hover.classList.replace("close", "shop");

      r.style.setProperty("--visibility", "visible");
      masksvg2.style.visibility = "visible";
      masksvg3.style.visibility = "visible";
      masksvg1.style.visibility = "visible";
    }, 700);
  } else {
    masksvg1.classList.add("animation1");

    r.style.setProperty("--visibility", "hidden");
    masksvg2.style.visibility = "hidden";
    masksvg3.style.visibility = "hidden";

    console.log("add animation class and change shop to close");

      hover.classList.replace("shop", "close");
      container1.classList.replace("open", "close");

  }
};

hover.onclick = function (event) {
  var masksvg1 = document.getElementById("mask-svg1");
  var hover = document.getElementById("hover");
  var container1 = document.getElementById("container1");
  var masksvg2 = document.getElementById("mask-svg2");
  var container2 = document.getElementById("container2");
  var container3 = document.getElementById("container3");
  var masksvg3 = document.getElementById("mask-svg3");

  if (
    masksvg1.classList.contains("animation1") &&
    hover.classList.contains("close")
  ) {
    masksvg1.classList.replace("animation1", "animation1-reverse");
    container1.classList.replace("close", "open");
    setTimeout(function () {
      masksvg2.style.visibility = "visible";
      masksvg3.style.visibility = "visible";

      r.style.setProperty("--visibility", "visible");
      hover.classList.replace("close", "shop");
    }, 700);
  } else if (hover.classList.contains("shop")) {
    alert("direction le shop");
    r.style.setProperty("--visibility", "hidden");
    masksvg2.style.visibility = "hidden";
    masksvg1.style.visibility = "hidden";
    masksvg3.style.visibility = "hidden";
  } else if (
    masksvg2.classList.contains("animation2") &&
    hover.classList.contains("close")
  ) {
    masksvg2.classList.replace("animation2", "animation2-reverse");
    container2.classList.replace("close", "open");
    setTimeout(function () {
      hover.classList.replace("close", "shop");
      masksvg1.style.visibility = "visible";
      masksvg3.style.visibility = "visible";
      r.style.setProperty("--visibility", "visible");
    }, 700);
  } else if (
    masksvg3.classList.contains("animation3") &&
    hover.classList.contains("close")
  ) {
    masksvg3.classList.replace("animation3", "animation3-reverse");
    container3.classList.replace("close", "open");
    setTimeout(function () {
      hover.classList.replace("close", "shop");
      masksvg2.style.visibility = "visible";
      masksvg3.style.visibility = "visible";
      masksvg1.style.visibility = "visible";
      r.style.setProperty("--visibility", "visible");
    }, 700);
  }
};

hovermasksvg2.onclick = function () {
  var masksvg1 = document.getElementById("mask-svg1");
  var masksvg2 = document.getElementById("mask-svg2");
  var masksvg3 = document.getElementById("mask-svg3");
  var hover = document.getElementById("hover");
  var container2 = document.getElementById("container2");

  if (masksvg2.classList.contains("animation2-reverse")) {
    masksvg2.classList.replace("animation2-reverse", "animation2");
    console.log("add animation class and change shop to close");
    r.style.setProperty("--visibility", "hidden");
    masksvg1.style.visibility = "hidden";
    masksvg3.style.visibility = "hidden";

      hover.classList.replace("shop", "close");
      container2.classList.replace("open", "close");

  } else if (masksvg2.classList.contains("animation2")) {
    masksvg2.classList.replace("animation2", "animation2-reverse");
    setTimeout(function () {
      container2.classList.replace("close", "open");
      hover.classList.replace("close", "shop");
      r.style.setProperty("--visibility", "visible");
      masksvg1.style.visibility = "visible";
      masksvg1.style.visibility = "visible";
    }, 700);
  } else {
    masksvg2.classList.add("animation2");

    r.style.setProperty("--visibility", "hidden");
    masksvg1.style.visibility = "hidden";
    masksvg3.style.visibility = "hidden";
    console.log("add animation class and change shop to close");

      hover.classList.replace("shop", "close");
      container2.classList.replace("open", "close");

  }
};

hovermasksvg3.onclick = function () {
  var masksvg1 = document.getElementById("mask-svg1");
  var masksvg2 = document.getElementById("mask-svg2");
  var masksvg3 = document.getElementById("mask-svg3");
  var hover = document.getElementById("hover");
  var container3 = document.getElementById("container3");

  if (masksvg3.classList.contains("animation3-reverse")) {
    masksvg3.classList.replace("animation3-reverse", "animation3");
    console.log("add animation class and change shop to close");
    r.style.setProperty("--visibility", "hidden");
    masksvg1.style.visibility = "hidden";
    masksvg2.style.visibility = "hidden";

      hover.classList.replace("shop", "close");
      container3.classList.replace("open", "close");

  } else if (masksvg3.classList.contains("animation3")) {
    masksvg3.classList.replace("animation3", "animation3-reverse");
    setTimeout(function () {
      container3.classList.replace("close", "open");
      hover.classList.replace("close", "shop");
      r.style.setProperty("--visibility", "visible");
      masksvg1.style.visibility = "visible";
      masksvg2.style.visibility = "visible";
    }, 700);
  } else {
    masksvg3.classList.add("animation3");

    r.style.setProperty("--visibility", "hidden");
    masksvg1.style.visibility = "hidden";
    masksvg2.style.visibility = "hidden";
    console.log("add animation class and change shop to close");

      hover.classList.replace("shop", "close");
      container3.classList.replace("open", "close");

  }
};


