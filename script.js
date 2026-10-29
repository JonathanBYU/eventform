const studentType = document.getElementById("type");
const studentinumber = document.getElementById("studentinumber");
const studentinumberdisplay = document.getElementById("studentinumberdisplay");
const accesscode = document.getElementById("accesscode");
const accesscodedisplay = document.getElementById("accesscodedisplay");
const output = document.getElementById("output");
const form = document.getElementById("eventTicketForm");

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

studentType.addEventListener('change', (event) => {
    event.preventDefault();
    if (event.target.value == "student") {
        accesscode.hidden = true;
        accesscodedisplay.hidden = true;
        studentinumber.hidden = false;
        studentinumberdisplay.hidden = false;
    }
    else if (event.target.value == "guest") {
        studentinumber.hidden = true;
        studentinumberdisplay.hidden = true;
        accesscode.hidden = false;
        accesscodedisplay.hidden = false;
    }
    else {
        studentinumber.hidden = true;
        studentinumberdisplay.hidden = true;
        accesscode.hidden = true;
        accesscodedisplay.hidden = true;
    };
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstname.value.trim();
    const lastName = form.lastname.value.trim();
    const userType = form.type.value;
    const date = form.date.value;
    const inumber = form.studentinumber.value.trim();
    const code = form.accesscode.value.trim();

    if (userType == "student" && inumber.length != 9) {
        output.textContent = "Student I# must be 9 digits";
        return;
    }

    if (userType == "guest" && code != "EVENT131") {
        output.textContent = "Incorrect Access Code";
        return;
    }

    if (isPastDate(date)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${userType}</p>
        <p>${date}</p>
        `;

});