const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const regex = /[^A-Za-z0-9]/gi;
  const replace = textInput.value.replace(regex, "").toLowerCase();

  if (textInput.value === "") {
    alert("Please input a value");
  } else if (textInput.value.length === 1) {
    result.innerText = `${textInput.value} is a palindrome`;
    result.classList.remove("hidden");
    result.classList.add("success");
    result.classList.remove("failure");
  } else if (replace === [...replace].reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`;
    result.classList.remove("hidden");
    result.classList.add("success");
    result.classList.remove("failure");
  } else if (replace !== [...replace].reverse().join("")) {
    result.innerText = `${textInput.value} is not a palindrome`;
    result.classList.remove("hidden");
    result.classList.add("failure");
    result.classList.remove("success");
  }
});
