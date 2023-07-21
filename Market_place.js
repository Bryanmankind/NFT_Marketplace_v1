const image_1 = document.querySelectorAll(".img-1");
const image_2 = document.querySelectorAll(".img-2");
const image_3 = document.querySelectorAll(".img-3");

let activeClass = 3; // Set initial activeImg to 3 for image_3
let nextImage = 1;

setInterval(function () {
  nextImage = nextImage + 1;

  if (nextImage === 1) {
    image_2.forEach((image) => image.classList.replace("active", "hidden"));
    image_3.forEach((image) => image.classList.replace("active", "hidden"));
    image_1.forEach((image) => image.classList.replace("hidden", "active"));
    activeImgClass = nextImage;
  } else if (nextImage === 2) {
    image_1.forEach((image) => image.classList.replace("active", "hidden"));
    image_3.forEach((image) => image.classList.replace("active", "hidden"));
    image_2.forEach((image) => image.classList.replace("hidden", "active"));
    activeImgClass = nextImage;
  } else {
    image_1.forEach((image) => image.classList.replace("active", "hidden"));
    image_2.forEach((image) => image.classList.replace("active", "hidden"));
    image_3.forEach((image) => image.classList.replace("hidden", "active"));
    activeImgClass = nextImage;
    nextImage = 0;
  }
}, 3000);

const SignUpPage = document.getElementById("Sign-up");
const overLay = document.querySelector(".overlay");

const login = document.getElementsByClassName("Sign-form");

SignUpPage.addEventListener("click", function showSignUp() {
  document.querySelector(".Create-Acc").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
});

overLay.addEventListener("click", function () {
  document.querySelector(".Create-Acc").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});
