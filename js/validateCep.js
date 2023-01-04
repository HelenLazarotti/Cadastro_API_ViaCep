//pego meu btn:
const btn = document.querySelector('#sendForm');

btn.addEventListener('click', (e) => {
    //cancela envio:
    e.preventDefault();

    //pego campo input do cep:
    const value_cep = document.querySelector('#cep');
    const input_cep = value_cep.value;
    //console.log(input_cep)

    //pego API, colocando o valor do meu input ali, pra pegar o local:
    const url_api = `https://viacep.com.br/ws/${input_cep}/json/`;

    //promessa q url ta retornando algo:
    fetch(url_api).then(resp => {
        //transformo em json:
        return resp.json();

    }).then(data => {
        fillInputs(data);
    })
})

//crio função pra preencher os outros inputs:
function fillInputs(data){
    console.log(data)

    //pego all inputs que vou manipular:
    const number = document.querySelector('#number');
    const district = document.querySelector('#district');
    const city = document.querySelector('#city');
    const uf = document.querySelector('#option_uf');

    //agr peço p reescrever com base nos dados do JSON:
    number.value = data.gia;
    district.value = data.logradouro;
    city.value = data.localidade;
    uf.innerHTML = data.uf;
}


