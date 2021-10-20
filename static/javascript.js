


var hovermasksvg1 = document.getElementById('hover-mask-svg1');
var closer = document.getElementById('hover2');

hovermasksvg1.onclick = function() {
var element=document.getElementById('mask-svg1');
var hover1=document.getElementById('hover1');
var hover2=document.getElementById('hover2');
var hoverSVG =document.getElementById('container1');

if (element.classList.contains("animation1")){
element.classList.replace("animation1","animation1-reverse");
console.log('change cursor to shop');
hover2.id = "hover1" ;
hoverSVG.style.setProperty('--opacity','100%');

}else if (element.classList.contains("animation1-reverse")){
element.classList.replace("animation1-reverse","animation1");
hover1.id = "hover2" ;
hoverSVG.style.setProperty('--opacity','0');

console.log('change cursor to close');

}else{
element.classList.add("animation1");
console.log('change cursor to close');
hover1.id = "hover2" ;
hoverSVG.style.setProperty('--opacity','0');
}

console.log('clicked');
};

closer.onclick = function (){

  console.log('BIATCHHHH');
  var element=document.getElementById('mask-svg1');
  var hover1=document.getElementById('hover1');
  var hover2=document.getElementById('hover2');
  var hoverSVG =document.getElementById('container1');

  if (element.classList.contains("animation1")){
    element.classList.replace("animation1","animation1-reverse");
    console.log('change cursor to shop');
    hover2.id = "hover1" ;
    hoverSVG.style.setProperty('--opacity','100%');
  }
   
   
   
   
   


};

