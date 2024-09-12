let saldo = 33000;
const elementoSaldo = document.querySelector(" .saldo-valor .valor ");
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString();
}
const elementoFormulario = document.querySelector(" .block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por gentileza, preencher todos os campos corretamente.");
        return;
    }
    const inputTipoTransacao = document.querySelector('#tipoTransacao');
    const inputValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação é inválida");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    const novaTransacao = {
        tipoTranssacao: tipoTransacao,
        valor: valor,
        data: data,
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
