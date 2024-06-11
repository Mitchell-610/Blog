const userName = document.querySelector(`#Username`);
const Title = document.querySelector(`#Title`);
const content = document.querySelector(`#Content`);
const submitBtn = document.querySelector(`#Submit`);

let blogs = [];


//Save blog entry, to local storage, via submit button.
submitBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
        if (userName.value === `` || Title.value === `` || content.value === ``) {
            alert(`Please fill out all forms, thank you.`);
            console.log(`N/A`);
            return;
        }
        else {
            let blog = {
                userName: userName.value,
                Title: Title.value,
                content: content.value
            };
            blogs.push(blog);

            return;
        }
    }

);
