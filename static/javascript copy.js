var hovermasksvg1 = document.getElementById("hover-mask-svg1");
var hover1 = document.getElementById("hover1");
/*
hovermasksvg1.onclick = function () {
  var element = document.getElementById("mask-svg1");
  var hover1 = document.getElementById("hover1");

  var hoverSVG = document.getElementById("container1");

  if (element.classList.contains("animation1")) {
    element.classList.replace("animation1", "animation1-reverse");
    hover1.classList.replace("close", "shop");
    hoverSVG.style.setProperty("--opacity", "100%"); 






  } else if (element.classList.contains("animation1-reverse")) {
    element.classList.replace("animation1-reverse", "animation1");
    hover1.classList.replace("shop", "close");
    hoverSVG.style.setProperty("--opacity", "0");
    console.log("change cursor to close");

 
 
 



  } else {
    element.classList.add("animation1");
    hover1.classList.replace("shop", "close");
    console.log("change cursor to close");
    hoverSVG.style.setProperty("--opacity", "0");






  }
  console.log("clicked");
};
*/


hover1.onclick = function () {
  var element = document.getElementById("mask-svg1");
  var hover1 = document.getElementById("hover1");

  var hoverSVG = document.getElementById("container1");

  if (hover1.classList.contains("close")) {
    if (element.classList.contains("animation1")) {
      element.classList.replace("animation1", "animation1-reverse");
      hover1.classList.replace("close", "shop");
      hoverSVG.style.setProperty("--opacity", "100%");
    console.log("clicked");
  }
};
};
 
/*
hover1.onclick = function () {

  var hoverSVG = document.getElementById("container1");
  var element = document.getElementById("mask-svg1");
  var i;
  if (document.getElementById("hover1").classList.contains("shop")) {
    /*setTimeout(function () {
      document.getElementById("hover2").addEventListener("click", () => {
        document
          .getElementById("mask-svg1")
          .classList.replace("animation1", "animation1-reverse");
      });
    }, 700); --
    alert("SHOP");
    return;
  } else {
    i=0;

    if (i=1){

      element.classList.replace("animation1", "animation1-reverse");
      hoverSVG.style.setProperty("--opacity", "100%");
    }
    
    alert("CLOSE");
    i++;
     }

};
*/
