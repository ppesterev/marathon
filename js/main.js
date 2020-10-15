// article filter

const filterSelect = document.querySelector('#articles_filter');
const articles = document.querySelectorAll('.article-card[data-tags]');

filterSelect.addEventListener('change', function() {
    for(const article of articles) {
        if (filterSelect.value === 'all' || article.dataset.tags.includes(filterSelect.value)) {
            article.classList.remove('hidden');
        } else {
            article.classList.add('hidden');
        }
    }
});
