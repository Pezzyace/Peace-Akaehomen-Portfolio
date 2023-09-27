//change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('.desktop-nav').classList.toggle('window-scroll', window.scrollY > 100);
})