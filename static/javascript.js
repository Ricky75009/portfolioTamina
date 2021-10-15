


  var mask1 = document.getElementById('hover-mask-svg1');

  mask1.style.cursor = 'pointer';
  mask1.onclick = function() {
    var element=document.getElementById('mask-svg1');
    element.classList.add("animation1");
    console.log('clicked')
    

  };


