


var hovermasksvg1 = document.getElementById('hover-mask-svg1');

hovermasksvg1.onclick = function() {
var element=document.getElementById('mask-svg1');
var hover1=document.getElementById('hover1');
var hover2=document.getElementById('hover2');
var hoverSVG =document.getElementById('container1');

if (element.classList.contains("animation1")){
// element.classList.replace("animation1","animation1-reverse");
console.log('change cursor to shop');
hover2.id = "hover1" ;
hoverSVG.style.setProperty('--opacity','100%');


}else if (element.classList.contains("animation1-reverse")){
element.classList.replace("animation1-reverse","animation1");
hover1.id = "hover2";


hoverSVG.style.setProperty('--opacity','0');

console.log('change cursor to close');

}else{
element.classList.add("animation1");
console.log('change cursor to close');
hover1.id = "hover2";
hoverSVG.style.setProperty('--opacity','0');
}

console.log('clicked');
};


function changeHover(){
var hover2=document.getElementById('hover2');
var mask = document.getElementById('mask-svg1');
if (mask.classList.contains("animation1-reverse")){
hover2.id ='hover1';
}
};

/*
var intervalId = window.setInterval(function(){
  if (document.getElementById('hover2') != null){
changeHover();}
}, 700);

*/


var hover1=document.getElementById('hover1');

hover1.onclick = function() {

  if (document.getElementById('hover2') != null){
    setTimeout(function(){ document.getElementById('hover2').addEventListener("click", () => {
      document.getElementById('mask-svg1').classList.replace("animation1","animation1-reverse");
    }); }, 700);
   
}else{
  setTimeout(function(){ alert('SHOP'); }, 700);
  }
};


