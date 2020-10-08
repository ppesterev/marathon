// Like counting

const likeBtn = document.querySelector('.article-likes__btn');
const likeCounter = document.querySelector('.article-likes__count');
let likeCount = parseInt(likeCounter.textContent);

likeBtn.addEventListener('click', function() {
    if(likeBtn.classList.contains('pressed')) {
        likeBtn.classList.remove('pressed');
        likeCount--;
    } else {
        likeBtn.classList.add('pressed');
        likeCount++;
    }
    likeCounter.textContent = likeCount;
});

// Commenting
const commentForm = document.querySelector('.comment-form');
const nameInput = commentForm.querySelector('input[name="name"');
const commentTextInput = commentForm.querySelector('textarea[name="comment_text"');

const commentList = document.querySelector('.comment-list');
const commentTemplate = document.querySelector('#comment_template').content;

commentForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const commentNode = commentTemplate.cloneNode(true);
    const commentText = commentNode.querySelector('.comment__text');
    const commentAuthor = commentNode.querySelector('.comment__username');
    commentText.textContent = commentTextInput.value;
    commentAuthor.textContent = nameInput.value;

    commentList.appendChild(commentNode);
});