document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loveCalculatorForm');
    const resultadoamorDiv = document.getElementById('resultadoamor');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const secondName = document.getElementById('secondName').value;

        //URL da API com os nomes
        const apiUrl = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`;

        //Chave de API
        const apiKey = '1fd4b30139msh334f7c09f2693d7p160336jsn937663fe5358';

        //Opções da solicitação
        const requestOptions = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey,
            },
        };

        //Fazer uma solicitação GET para a API usando fetch()
        fetch(apiUrl, requestOptions)
            .then(response => {
                //Verificar se a resposta da API está OK
                if (!response.ok) {
                    throw new Error('Erro ao calcular o amor');
                }
                //Converter a resposta em formato JSON
                return response.json();
            })
            .then(data => {
                //O resultado do cálculo de amor
                const porcentagemAmor = data.percentage;
                const mensagem = data.result;

                //Exibir o resultado na página
                resultadoamorDiv.innerHTML = `
                    <p>A porcentagem de amor entre ${firstName} e ${secondName} é de ${porcentagemAmor}%.</p>
                    <p>${mensagem}</p>
                `;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });
});

//MODO ESCURO
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');
});

//COPATIBILIDADE DOS SIGNOS
function obterCompatibilidade(signo1, signo2) {
    if (signo1 === signo2) {
        return "Muito Alta";
    } else {
        return "Baixa";
    }
}

function calcularCompatibilidade() {
    const signo1 = document.getElementById("signo1").value;
    const signo2 = document.getElementById("signo2").value;

    const compatibilidade = obterCompatibilidade(signo1, signo2);

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `A compatibilidade entre ${signo1} e ${signo2} é ${compatibilidade}.`;
}