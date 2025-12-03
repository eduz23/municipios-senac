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
    }
}