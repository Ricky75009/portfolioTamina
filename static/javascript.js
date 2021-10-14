var btn = document.querySelector('input');
btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.value === 'animation') {
      btn.value = 'retour';
        document.getElementById('mask-svg');
        element.classList.add("shrinkgrow");
    } else {
      btn.value = 'animation';
    
    }
  }