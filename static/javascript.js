var btn = document.querySelector('input');
btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.value === 'animation') {
      btn.value = 'retour';
    
    } else {
      btn.value = 'animation';
    
    }
  }