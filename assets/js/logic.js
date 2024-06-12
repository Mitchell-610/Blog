const backBtn = document.querySelector(`#back`);
backBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    window.location.href = `index.html`;
}
);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
    

