const clicado = document.querySelectorAll(".li");

function descricao(index) {
	const titulo = document.querySelector(".titulo");
	const data = document.querySelector(".data");
	const local = document.querySelector(".local");
	const desc = document.querySelector(".desc2");
	if (index == 0) {
		titulo.innerHTML = "Estudante de Informática";
		data.innerHTML = "Fev 2017 - 2019";
		local.innerHTML = "EEEP Francisca Maura Martins";
		desc.innerHTML =
			"No curso técnico em informática aprendi várias linguagens de programação (PHP, JS e Pascal), linguagem de marcação (HTML5) e linguagem de estilização (CSS3), tive também aprendizados com banco de dados com SQL por meio do MySQL. E como um bom curso de informática, aprendi a fazer manutenção e formatação de desktops.";
	} else if (index == 1) {
		titulo.innerHTML = "Estagiário da Sec. de Educação";
		data.innerHTML = "Ago 2019 - Jan 2020";
		local.innerHTML = "Secretária de Educação de Hidrolândia";
		desc.innerHTML =
			"Durante o estágio que fiz na secretátia de educação, pude por em prática todo conhecimento que adquirir durante o curso profissionalizante de técnico em informática. Lá coloquei em prática principalmente conceitos de manutenção e formatação de desktops, digitalização de textos, edição de imagens, configuração de roteadores e manutenção de impressoras.";
	} else if (index == 2) {
		titulo.innerHTML = "Estudante de Ciência da Computação";
		data.innerHTML = "Fev 2020 - Atual";
		local.innerHTML = "UFC Campus Cratéus";
		desc.innerHTML =
			"Atualmente estou indo para o quinto semestre do curso. Um curso que escolhi por conta de ter realizado um ensino médio profissionalizante e como gostei bastante do que eu aprendi, resolvi continuar na área e apronfundar meus conhecimentos, tem sido um processo exaltivo, mas ao mesmo tempo de bastante absorção de conhecimento.";
	} else {
		titulo.innerHTML = "Membro do DIO Campus Expert";
		data.innerHTML = "Fev 2022 - Atual";
		local.innerHTML = "DIO / Remoto";
		desc.innerHTML =
			"Mas recentemente passei no processo seletivo da DIO, para fazer parte do DIO Campus Expert que busca capacitar estudantes universitários através de mentorias técnicas e de carreira para se tornarem líderes tech em suas universidades. Dessa forma, visa tornar os participantes referências em suas instituições de ensino. ";
	}
}
for (let i = 0; i < clicado.length; i++) {
	clicado[i].addEventListener("click", () => {
		for (let j = 0; j < clicado.length; j++) {
			clicado[j].classList.remove("ativo");
		}
		clicado[i].classList.add("ativo");
		descricao(i);
	});
}
