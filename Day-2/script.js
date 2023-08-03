let hamburger = document.querySelector(".bars");
hamburger.addEventListener("click", () => {
  console.log("hello");
  hamburger.classList.toggle("clicked");
  hamburger.classList.remove("reset");
});
