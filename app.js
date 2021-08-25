const checkBox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit");

// disable button and checkbox as default
checkBox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

// assign color to elements
elements.forEach(function (element) {
  const color = getRandomColor();
  // assign the generated color to background
  element.style.backgroundColor = color;
  // assign color to innerHTML element
  element.innerHTML = color;
  selectColor.innerHTML = color;
});

// generate random color function
function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

// verify if color matches selected color
elements.forEach(function (element) {
  element.addEventListener("click", function () {
    if (element.innerHTML === selectColor.innerHTML) {
      checkBox.checked = true;
      alert("You may Pass!");
      submitBtn.disabled = false;
      submitBtn.classList.remove("btn-light");
      submitBtn.classList.add("btn-success");
    } else {
      alert("You may not Pass! Try Again!");
      location.reload(true);
    }
  });
});
