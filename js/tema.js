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

	let linkedin = document.querySelector(".linkedin");
	let github = document.querySelector(".github");
	let curriculo = document.querySelector("#curriculo");
	let email = document.querySelector("#email");
	let link = document.querySelectorAll(".linkimg");
	if (clicar.checked) {
		linkedin.src = "assets/header/linkedin-dark.svg";
		github.src = "assets/header/github-dark.svg";
		curriculo.src = "assets/sobreMim/download-dark.svg";
		email.src = "assets/sobreMim/mail-dark.svg";
		for (let i = 0; i < link.length; i++) {
			link[i].src = "assets/projetos/link-dark.svg";
		}
	} else {
		linkedin.src = "assets/header/linkedin.svg";
		github.src = "assets/header/github.svg";
		curriculo.src = "assets/sobreMim/download-cloud.svg";
		email.src = "assets/sobreMim/mail.svg";
		for (let i = 0; i < link.length; i++) {
			link[i].src = "assets/projetos/link.svg";
		}
	}
});
