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