const chaveDaApi ="c5921751e2eb410db3d201955241105";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    const dados = await buscarDadosDaCidade(cidade);

    if (dados) preencherDadoNaTela (dados, cidade);

});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt` ;

    const response = await fetch(apiUrl);

    const dados = response.json();

    return dados;
}

function preencherDadoNaTela(dados,cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura}°C`;

    document.getElementById("condicao").textContent = condicao;

    document.getElementById("humidade").textContent = `${humidade}%`;

    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}km/h`;

    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);

}
