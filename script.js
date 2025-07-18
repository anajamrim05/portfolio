document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  menuToggle.style.display = 'none';
  
  const menu = document.querySelector('.menu');
  if (menu) {
    menu.insertBefore(menuToggle, menu.firstChild);
    
    menuToggle.addEventListener('click', function() {
      const ul = menu.querySelector('ul');
      if (ul) ul.classList.toggle('active');
    });
  }
});