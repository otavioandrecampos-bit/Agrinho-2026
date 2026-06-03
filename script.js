let producao = 50;
let agua = 50;
let solo = 50;
let bio = 50;

function atualizar() {

document.getElementById("producao").textContent = producao;
document.getElementById("agua").textContent = agua;
document.getElementById("solo").textContent = solo;
document.getElementById("bio").textContent = bio;

}

document.getElementById("irrigacao").addEventListener("click", () => {

agua += 15;
producao += 10;

document.getElementById("mensagem").textContent =
"Irrigação inteligente reduz desperdícios de água.";

atualizar();

});

document.getElementById("plantio").addEventListener("click", () => {

solo += 15;
producao += 10;

document.getElementById("mensagem").textContent =
"Plantio direto protege o solo e aumenta a produtividade.";

atualizar();

});

document.getElementById("arvores").addEventListener("click", () => {

bio += 20;

document.getElementById("mensagem").textContent =
"Árvores ajudam na conservação da biodiversidade.";

atualizar();

});

document.getElementById("agrotoxicos").addEventListener("click", () => {

bio += 15;
agua += 10;

document.getElementById("mensagem").textContent =
"Redução de agrotóxicos melhora a qualidade ambiental.";

atualizar();

});

document.getElementById("tema").addEventListener("click", () => {

document.body.classList.toggle("dark");

});

atualizar();
