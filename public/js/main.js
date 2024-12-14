const showAnswers = document.querySelectorAll('.show-answer');
showAnswers.forEach((link)=> {
    link.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    })
})

window.addEventListener('scroll', ()=> {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolling');
        } else {
            navbar.classList.remove('scrolling');
    }
});

const categoryBtn = document.getElementById('categoryBtn');
const categoryMenu = document.getElementById('categoryMenu');

categoryBtn.addEventListener('click', ()=> {
    categoryMenu.classList.toggle('hidden');
});

// Close the menu when clicking outside
document.addEventListener('click', (e)=> {
    if (!categoryBtn.contains(e.target) && !categoryMenu.contains(e.target)) {
      categoryMenu.classList.add('hidden');
    }
  });