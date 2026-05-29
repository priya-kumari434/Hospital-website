function scrollToForm(){

  document
  .getElementById("contact")
  .scrollIntoView({
    behavior:"smooth"
  });

}

const form =
document.getElementById("form");

const appointmentList =
document.getElementById("appointmentList");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const name =
  document.getElementById("name").value;

  const age =
  document.getElementById("age").value;

  const gender =
  document.getElementById("gender").value;

  const disease =
  document.getElementById("disease").value;

  const date =
  document.getElementById("date").value;

  const time =
  document.getElementById("time").value;

  const div =
  document.createElement("div");

  div.classList.add("booking-card");

  div.innerHTML = `

    <h3>${name}</h3>

    <p>
      <b>Age:</b> ${age}
    </p>

    <p>
      <b>Gender:</b> ${gender}
    </p>

    <p>
      <b>Disease:</b> ${disease}
    </p>

    <p>
      <b>Date:</b> ${date}
    </p>

    <p>
      <b>Time Slot:</b> ${time}
    </p>

  `;

  appointmentList.appendChild(div);

  alert("Appointment Booked Successfully!");

  form.reset();

});