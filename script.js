// ======= Mensagem Dinâmica =======
const input = document.getElementById("mensagem-input");
const mostrarBtn = document.getElementById("mostrar-btn");
const limparBtn = document.getElementById("limpar-btn");
const mensagemExibida = document.getElementById("mensagem-exibida");

// Mostrar mensagem
mostrarBtn.addEventListener("click", () => {
    const texto = input.value.trim();

    if (texto) {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = texto;
        mensagemExibida.innerHTML = ""; 
        mensagemExibida.appendChild(novoParagrafo);
    } else {
        alert("Digite uma mensagem antes!");
    }
});

// Limpar mensagem
limparBtn.addEventListener("click", () => {
    mensagemExibida.innerHTML = "";
    input.value = "";
});

// ======= Contador =======
let contador = 0;
const contadorDiv = document.getElementById("contador");

document.getElementById("incrementar").addEventListener("click", () => {
    contador++;
    contadorDiv.textContent = contador;
});

document.getElementById("decrementar").addEventListener("click", () => {
    contador--;
    contadorDiv.textContent = contador;
});

document.getElementById("zerar").addEventListener("click", () => {
    contador = 0;
    contadorDiv.textContent = contador;
});

// ======= Modo Claro/Escuro =======
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "🌞 Modo Claro";
    } else {
        toggleBtn.textContent = "🌙 Modo Escuro";
    }
});
