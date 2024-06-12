document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data from local storage
    const blogEntries = localStorage.getItem('blog');
    const section = document.getElementById(`input`);
    const newLi = document.createElement(`li`);
    newLi.className = `blog-entry`;


    const parsedEntries = JSON.parse(blogEntries);
    const entryText = `${parsedEntries.userName}: ${parsedEntries.Title} - ${parsedEntries.content}`;
    newLi.textContent = entryText;
    section.appendChild(newLi);


    //newLi.textContent = blogEntries;
    //section.appendChild(newLi);
});