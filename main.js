const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Getting local storage notes if exist and parsing them
//to JS object else passing the empty array to notes.
const notes = JSON.parse(localStorage.getItem("notes") || "[]");


// Display the form on clicking the Add Note Box
addBox.addEventListener("click", () => {

    popupBox.classList.add("show");

});


// Closing the opened form
closeIcon.addEventListener("click", () => {

    titleTag.value = "";
    descTag.value = "";
    popupBox.classList.remove("show");

});

function showMenu(elem){
    elem.parentElement.classList.add("show");
}


function showNotes(){

    // Removing the duplication of elements if exist
    document.querySelectorAll(".note").forEach(note => note.remove());

    notes.forEach((note) => {

        let liTag = `<li class="note">
                        <p>${note.title}</p>

                        <span>
                            ${note.description}
                        </span>

                        <div class="bottom-content">
                            <span>${note.date}</span>

                            <div class="settings">
                                <i onclick = "showMenu(this)" class='bx bx-dots-horizontal-rounded' ></i>
                                <ul class="menu">
                                    <li><i class='bx bx-pencil'></i>Edit</li>
                                    <li><i class='bx bx-trash' ></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;

        addBox.insertAdjacentHTML("afterend", liTag);
    });
}

showNotes();



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

        let noteInfo = {
            title: noteTitle, description: notedesc,
            date: `${month} ${day}, ${year}`
        }

        
        notes.push(noteInfo);       //Adding new note to notes.

        //Saving notes to locaql storage
        localStorage.setItem("notes", JSON.stringify(notes))
        closeIcon.click();
        showNotes();

    }

});