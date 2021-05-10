var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

  //   var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      alert("Thanks for your submission!");

      form.reset();
    })
    .catch(() => {
      alert(
        "Oops! There was a problem submitting your form. Please fill in correctly"
      );
    });
}

form.addEventListener("submit", handleSubmit);
