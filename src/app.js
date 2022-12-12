const about = document.querySelector('.about');
const btns = document.querySelectorAll('.nav-link');
const articles = document.querySelectorAll('.about-content .content');

about.addEventListener('click', e => {
    const articleId = e.target.dataset.id;
    if (articleId) {
        btns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        articles.forEach(article => {
            article.classList.remove('active');
        });
        const articleActive = document.getElementById(articleId);
        articleActive.classList.add('active');
    }
});
