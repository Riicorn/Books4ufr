// 🌸 Books4U frontend script by Riya

document.addEventListener("DOMContentLoaded", () => {
    console.log("Books4U website loaded successfully! 💛");

    // Simple button animation
    const ctaButton = document.querySelector('.cta-btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert("📚 Redirecting to book collection!");
        });
    }
});

// 🌸 Filter Books by Genre
function filterBooks(category) {
  const books = document.querySelectorAll('.book-card');
  books.forEach(book => {
    if (category === 'all' || book.classList.contains(category)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
