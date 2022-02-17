const clicar = document.querySelector(".toggle");

function themeDark(variavel, class1, class2) {
	for (let index = 0; index < variavel.length; index++) {
		variavel[index].classList.toggle(`${class1}`);
		variavel[index].classList.toggle(`${class2}`);
	}
}
clicar.addEventListener("click", function () {
	const dark = document.querySelectorAll(".dark");
	const dark2 = document.querySelectorAll(".dark2");
	const light = document.querySelectorAll(".light");
	const light2 = document.querySelectorAll(".gray-light");

	themeDark(dark, "dark", "light");
	themeDark(light, "dark", "light");
	themeDark(dark2, "dark2", "gray-light");
	themeDark(light2, "dark2", "gray-light");
});
