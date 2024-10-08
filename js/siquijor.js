document.addEventListener('DOMContentLoaded', () => {
    // Fetch and insert header
    fetch('../components/header.html')
        .then(response => response.text())
        .then(html => document.getElementById('header').innerHTML = html)
        .catch(error => console.error('Error loading header:', error));

    // Fetch and insert footer
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(html => document.getElementById('footer').innerHTML = html)
        .catch(error => console.error('Error loading footer:', error));

    // Load map and gallery
    loadMap();
    loadGallery();

    // Load saved comments
    loadComments();

    // Handle comment form submission
    document.getElementById('comment-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;
        if (name && comment) {
            const commentHTML = `
                <div class="comment">
                    <p><strong>${name}</strong>: ${comment}</p>
                    <div class="comment-buttons">
                        <button onclick="likeComment(this)"><i class="fa fa-thumbs-up"></i> Like</button>
                        <button onclick="replyComment(this)"><i class="fa fa-reply"></i> Reply</button>
                    </div>
                </div>
            `;

            // Add comment to the comments section
            document.getElementById('comments-list').insertAdjacentHTML('beforeend', commentHTML);
            
            // Save comment to local storage
            saveComment(name, comment);

            // Clear form fields
            document.getElementById('comment-form').reset();
        }
    });

    // Like Button Script
    const likeButton = document.querySelector('.like-button');
    const likeCounter = document.getElementById('like-counter');

    if (likeButton && likeCounter) {
        let likeCount = 0;
        likeButton.addEventListener('click', () => {
            likeCount++;
            likeCounter.textContent = likeCount;
        });
    }
});



// Like comment functionality
function likeComment(button) {
    button.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
    button.disabled = true;
}

// Reply comment functionality
function replyComment(button) {
    alert('Reply feature is coming soon!');
}
