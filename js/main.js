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

// message length validation

// const contactForm = document.querySelector('.contactme-form');
// const messageField = contactForm.querySelector('#contactme_message');
// const contactFormSubmit = contactForm.querySelector('.contactme-form__submit');

// contactForm.addEventListener('submit', function() {
//     if (messageField.value.length < messageField.minLength
//         || messageField.value.length > messageField.maxLength) {
//         messageField.style = "color: red";
//         contactFormSubmit.disabled = true;
//     } else {
//         messageField.style = "";
//         contactFormSubmit.disabled = false;
//     }
// })
