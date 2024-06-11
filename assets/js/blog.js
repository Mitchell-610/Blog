document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data from local storage
    const blogEntries = localStorage.getItem('blog');
    const section = document.getElementById(`input`);
    const newLi = document.createElement(`li`);
    newLi.className = `blog-entry`;
    newLi.textContent = blogEntries;
    section.appendChild(newLi);
});