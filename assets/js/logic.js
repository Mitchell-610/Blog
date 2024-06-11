const backBtn = document.querySelector(`#back`);

backBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    window.location.href = `index.html`;
}
);

