const advice_container = document.getElementById("advice_message");
const advice_id = document.getElementById("advice_id");
const change_button = document.getElementById("change_button");
const error = document.getElementById("error-message");
const loader = document.getElementById("loader");

async function getAdvice() {
  try {
    loader.classList.add("show");
    advice_container.classList.remove("show");
    await fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        loader.classList.remove("show");
        advice_id.innerHTML = `#${data.slip.id}`;

        advice_container.classList.add("show");
        advice_container.innerHTML = data.slip.advice;
      });
  } catch (err) {
    error.classList.add("show");

    setTimeout(() => {
      error.classList.remove("show");
    }, 1000);
  }
}

getAdvice();

change_button.addEventListener("click", function () {
  getAdvice();
});
