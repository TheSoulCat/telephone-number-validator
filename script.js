const userInput = document.getElementById("user-input");
const checkBtn  = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const checkUserInput = () => userInput.value ? numValidator(userInput.value) : alert("Please provide a phone number");

const numValidator = (input) => {
  const regex = /^[1]?[-\s]?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/;
    if (regex.test(input)) {
      const newParagraph = document.createElement("p");
      newParagraph.classList = "results-text";
      newParagraph.innerText = `Valid US number: ${input}`;
      newParagraph.style.color = "green";
      results.appendChild(newParagraph);
    } else {
      const newParagraph = document.createElement("p");
      newParagraph.classList = "results-text";
      newParagraph.innerText = `Invalid US number: ${input}`;
      newParagraph.style.color = "red";
      results.appendChild(newParagraph);
    };
};

// Listening for button click or keydown 
checkBtn.addEventListener("click", checkUserInput);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
    e.preventDefault();
  }
});

clearBtn.addEventListener('click', () => {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  userInput.value = "";
});