const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImage.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});
