document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data from local storage
    const blogEntries = localStorage.getItem('blog');
    const section = document.getElementById(`input`);
    const newLi = document.createElement(`li`);
    newLi.className = `blog-entry`;

    const parsedEntries = JSON.parse(blogEntries);

    // Create elements for username, title, and content
    const usernameLabel = document.createElement('span');
    usernameLabel.textContent = "Username: ";
    const usernameElement = document.createElement('span');
    usernameElement.textContent = parsedEntries.userName;

    const titleLabel = document.createElement('h2');
    titleLabel.textContent = "Title: ";
    const titleElement = document.createElement('h2');
    titleElement.textContent = parsedEntries.Title;

    const contentLabel = document.createElement('p');
    contentLabel.textContent = "Content: ";
    const contentElement = document.createElement('p');
    contentElement.textContent = parsedEntries.content;

    // Append the elements to the new list item
    newLi.appendChild(usernameLabel);
    newLi.appendChild(usernameElement);
    newLi.appendChild(document.createElement('br')); // Add line break for formatting
    newLi.appendChild(titleLabel);
    newLi.appendChild(titleElement);
    newLi.appendChild(document.createElement('br')); // Add line break for formatting
    newLi.appendChild(contentLabel);
    newLi.appendChild(contentElement);

    // Append the new list item to the section
    section.appendChild(newLi);
 
});