var hovermasksvg1 = document.getElementById("hover-mask-svg1");
var hover1 = document.getElementById("hover1");
var hovermasksvg2 = document.getElementById("hover-mask-svg2");

hovermasksvg1.onclick = function () {
  var masksvg1 = document.getElementById("mask-svg1");
  var hover1 = document.getElementById("hover1");
  var container1 = document.getElementById("container1");
  var masksvg2 = document.getElementById("mask-svg2");

  if (masksvg1.classList.contains("animation1-reverse")) {
    masksvg1.classList.replace("animation1-reverse", "animation1");
    container1.style.setProperty("--opacity", "0");
    masksvg2.style.setProperty("--opacity", "1");
    console.log("add animation class and change shop to close");
    setTimeout(function () {
      hover1.classList.replace("shop", "close");
      container1.classList.replace("open", "close");
    }, 700);
  } else if (masksvg1.classList.contains("animation1")) {
    masksvg1.classList.replace("animation1", "animation1-reverse");
    setTimeout(function () {
      container1.classList.replace("close", "open");
      hover1.classList.replace("close", "shop");
      container1.style.setProperty("--opacity", "1");
    }, 700);
  } else {
    masksvg1.classList.add("animation1");
    container1.style.setProperty("--opacity", "0");
    console.log("add animation class and change shop to close");
    setTimeout(function () {
      hover1.classList.replace("shop", "close");
      container1.classList.replace("open", "close");
    }, 700);
  }
};

hover1.onclick = function (event) {
  var masksvg1 = document.getElementById("mask-svg1");
  var hover1 = document.getElementById("hover1");
  var container1 = document.getElementById("container1");
  var masksvg2 = document.getElementById("mask-svg2");
  var container2 = document.getElementById("container2");

  if (
    masksvg1.classList.contains("animation1") &&
    hover1.classList.contains("close")
  ) {
    masksvg1.classList.replace("animation1", "animation1-reverse");
    container1.classList.replace("close", "open");
    container1.style.setProperty("--opacity", "1");
    setTimeout(function () {
      hover1.classList.replace("close", "shop");
    }, 700);
  } else if (hover1.classList.contains("shop")) {
    alert("direction le shop");
    // travailler sur enlever la div !
  } else if( masksvg2.classList.contains("animation2") &&
  hover1.classList.contains("close")){
    masksvg2.classList.replace("animation2", "animation2-reverse");
    container2.classList.replace("close", "open");
    container2.style.setProperty("--opacity", "1");
    setTimeout(function () {
      hover1.classList.replace("close", "shop");
    }, 700);


  };
};

hovermasksvg2.onclick = function () {
  var masksvg2 = document.getElementById("mask-svg2");
  var hover1 = document.getElementById("hover1");
  var container2 = document.getElementById("container2");

  if (masksvg2.classList.contains("animation2-reverse")) {
    masksvg2.classList.replace("animation2-reverse", "animation2");
    container2.style.setProperty("--opacity", "0");
    console.log("add animation class and change shop to close");
    setTimeout(function () {
      hover1.classList.replace("shop", "close");
      container2.classList.replace("open", "close");
    }, 700);
  } else if (masksvg2.classList.contains("animation2")) {
    masksvg2.classList.replace("animation2", "animation2-reverse");
    setTimeout(function () {
      container2.classList.replace("close", "open");
      hover1.classList.replace("close", "shop");
      container2.style.setProperty("--opacity", "1");
    }, 700);
  } else {
    masksvg2.classList.add("animation2");
    container2.style.setProperty("--opacity", "0");
    console.log("add animation class and change shop to close");
    setTimeout(function () {
      hover1.classList.replace("shop", "close");
      container2.classList.replace("open", "close");
    }, 700);
  }
};
