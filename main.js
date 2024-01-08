const hamburger = document.getElementById('nav');
const navigation = document.getElementById('navigation');
const chevron = document.getElementById('close-btn');


//change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('.desktop-nav').classList.toggle('window-scroll', window.scrollY > 100);
})


// navigation btns

hamburger.addEventListener('click', () => {
  navigation.classList.add("show");
})

chevron.addEventListener('click', () => {
  navigation.classList.remove("show");
})

// Scroll into view sequence

const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });