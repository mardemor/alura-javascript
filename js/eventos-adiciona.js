if (!StoragePacientes.existe()) StoragePacientes.criar();

/*
    Evento: click
    Alvo  : #button-adicionar
    Ação  : Capturar os dados do formulario e adicionar ao storage
 */
document.querySelector('#button-adicionar').addEventListener(
    'click',
    function (event) {
        event.preventDefault();
        var paciente = FormPacientes.buscar();
        var erros = FormPacientes.validar(paciente);
        if (erros.length > 0) {
            FormPacientes.exibirErros(erros);
            return;
        }
        StoragePacientes.adicionar(paciente);
        window.location = 'lista.html';
        form.reset();
        document.querySelector('#ul-erros-adiciona').innerHTML = "";
    });

