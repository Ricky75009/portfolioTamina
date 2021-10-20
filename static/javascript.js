


var hover1 = document.getElementById('hover-mask-svg1');


hover1.onclick = function() {
var element=document.getElementById('mask-svg1');
var cursor=document.getElementsByClassName('hover1');

if (element.classList.contains("animation1")){
  element.classList.replace("animation1","animation1-reverse");
}else if (element.classList.contains("animation1-reverse")){
  element.classList.replace("animation1-reverse","animation1");
  element.style = "cursor : url('../content/cursors/close.svg'),default;";
      }else{
  element.classList.add("animation1");
}

console.log('clicked')
};


var mask1 = document.getElementById('mask-svg1');
mask1.style.cursor = 'pointer';
mask1.onclick = function() {
var element=document.getElementById('mask-svg1');

if (element.classList.contains("animation1")){
  element.classList.replace("animation1","animation1-reverse");
}else if (element.classList.contains("animation1-reverse")){
  element.classList.replace("animation1-reverse","animation1");
      }else{
  element.classList.add("animation1");
}

console.log('clicked')
};



