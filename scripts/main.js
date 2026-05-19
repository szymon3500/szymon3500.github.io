const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/samochod.jpg") {
    myImage.setAttribute("src", "images/samochod2.jpg");
  } else {
    myImage.setAttribute("src", "images/samochod.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let welcomeMessage = "Witaj, "


function setUserName() {
  const myName = prompt("Please enter your name.");
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${welcomeMessage} ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${welcomeMessage} ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});