const box = document.getElementById("navlist");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 2.75 * box.scrollHeight) box.classList.add("fixed");
  else box.classList.remove("fixed");
});
