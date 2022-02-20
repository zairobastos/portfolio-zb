const menuMobile = document.querySelector(".visible");
const closer = document.querySelector(".hidden");
const menu2 = document.querySelector(".menu");
menuMobile.addEventListener("click", () => {
	menuMobile.classList.toggle("hidden");
	menuMobile.classList.toggle("visible");
	closer.classList.toggle("hidden");
	closer.classList.toggle("visible");
	menu2.classList.add("menuG");
});

closer.addEventListener("click", () => {
	menuMobile.classList.toggle("hidden");
	menuMobile.classList.toggle("visible");
	closer.classList.toggle("hidden");
	closer.classList.toggle("visible");
	menu2.classList.remove("menuG");
});
