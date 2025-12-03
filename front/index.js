<<<<<<< HEAD:api-municipios-pg/front/index.js
const api = "http://localhost:3000/municipios";
const lista = document.getElementById('listagem');
const botao = document.getElementById('btn');
const salvar = document.getElementById('btn-salvar')
const nome = document.getElementById('campoMunicipio');
const estado = document.getElementById('campoUF');
const caracteristica = document.getElementById('campoCaracteristica');

botao.addEventListener("click", carregarMunicipios)
salvar.addEventListener("click", inserir)

async function carregarMunicipios() {
    try {
        const resposta = await fetch(api);
        const dados = await resposta.json();
        lista.innerHTML = "";

        dados.forEach(municipio => {
            const li = document.createElement("li");
            li.textContent = municipio.nome + " - "+ municipio.estado + " - " + municipio.caracteristica;
            lista.appendChild(li)
        });

    }

    catch (erro) {
        console.log('erro', erro.message)
    }
}

async function inserir() {

    const novoMunicipio = { nome: nome.value, estado: estado.value, caracteristica: caracteristica.value}

    try {
        const resposta = await fetch(api, { method: "POST", body: JSON.stringify(novoMunicipio), headers: { "Content-Type": "application/json" } })

    }
    catch (erro) {
        console.error("deu ruim", erro.message)
=======
const API = "http://127.0.0.1:3000/municipios";

const listagem = document.getElementById("listagem");
const btnCarregar = document.getElementById("btn");
const btnSalvar = document.getElementById("btnSalvar");

// Eventos
btnCarregar.addEventListener("click", carregarMunicipios);
btnSalvar.addEventListener("click", inserirMunicipio);

//--------------------------------------------------
// LISTAR MUNICÍPIOS
//--------------------------------------------------
async function carregarMunicipios() {
    try {
        const resposta = await fetch(API);
        const dados = await resposta.json();

        listagem.innerHTML = ""; // limpa

        dados.forEach(m => criarCard(m));

    } catch (erro) {
        console.error("Erro ao carregar:", erro.message);
    }
}

//--------------------------------------------------
// CRIAR CARD NO FRONT
//--------------------------------------------------
function criarCard(m) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${m.nome} (${m.estado})</h3>
        <p>${m.caracteristica}</p>
        <button class="btn-delete" onclick="deletar()">Deletar</button>
    `;

    listagem.appendChild(card);
}

//--------------------------------------------------
// INSERIR MUNICÍPIO (POST)
//--------------------------------------------------
async function inserirMunicipio() {
    const nome = document.getElementById("campoMunicipio").value;
    const estado = document.getElementById("campoUF").value;
    const caracteristica = document.getElementById("campoCaracteristica").value;

    const novoMunicipio = { nome, estado, caracteristica };

    try {
        const resposta = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoMunicipio),
        });

        if (!resposta.ok) {
            throw new Error("Erro ao inserir!");
        }

        carregarMunicipios();

    } catch (erro) {
        console.error("Erro ao inserir:", erro.message);
>>>>>>> 4a42509ba4596ca3981f0e0064f2692ebefcb8c1:front/index.js
    }
}

async function deletar(){
<<<<<<< HEAD:api-municipios-pg/front/index.js
    
=======
    alert("vou deletar");
>>>>>>> 4a42509ba4596ca3981f0e0064f2692ebefcb8c1:front/index.js
}