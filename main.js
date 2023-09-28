const hamburger = document.getElementById('nav');
const navigation = document.getElementById('navigation');
const chevron = document.getElementById('close-btn');


//change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('.desktop-nav').classList.toggle('window-scroll', window.scrollY > 100);
})


// navigation btns

hamburger.addEventListener('click', () => {
  navigation.style.display = 'flex';
})

chevron.addEventListener('click', () => {
  navigation.style.display = 'none';
})
