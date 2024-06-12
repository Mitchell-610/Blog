document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data from local storage
    const blogEntries = JSON.parse(localStorage.getItem('blogs')) || [];
    const section = document.getElementById('input');

    blogEntries.forEach(entry => {
        const newLi = document.createElement(`li`);
        newLi.className = `blog-entry`;

        // Create elements for username, title, and content for each entry
        const usernameLabel = document.createElement('span');
        usernameLabel.textContent = "Username: ";
        const usernameElement = document.createElement('span');
        usernameElement.textContent = entry.userName;

        const titleLabel = document.createElement('p');
        titleLabel.textContent = "Title: ";
        const titleElement = document.createElement('p');
        titleElement.textContent = entry.Title;

        const contentLabel = document.createElement('p');
        contentLabel.textContent = "Content: ";
        const contentElement = document.createElement('p');
        contentElement.textContent = entry.content;

        // Append the elements to the new list item
        newLi.appendChild(usernameLabel);
        newLi.appendChild(usernameElement);
        newLi.appendChild(titleLabel);
        newLi.appendChild(titleElement);
        newLi.appendChild(contentLabel);
        newLi.appendChild(contentElement);

        // Append the new list item to the section
        section.appendChild(newLi);
    });
});
