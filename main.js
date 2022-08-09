const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// Display the form on clicking the Add Note Box
addBox.addEventListener("click", () => {

    popupBox.classList.add("show");

});


// Closing the opened form
closeIcon.addEventListener("click", () => {

    popupBox.classList.remove("show");

});



// Closing the opened form
addBtn.addEventListener("click", e => {

    e.preventDefault();                 //Stopping the form from submitting
    let noteTitle = titleTag.value;
    let notedesc = descTag.value;

    // If atleast one value is present.
    if(noteTitle || notedesc)
    {
        let dateObj = new Date();
        let month = months[dateObj.getMonth()];
        let day = dateObj.getDate();
        let year = dateObj.getFullYear();

        

        console.log(month);

    }

});