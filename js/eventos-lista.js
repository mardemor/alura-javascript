if (!StoragePacientes.existe()) StoragePacientes.criar();
TabelaPacientes.preencher(StoragePacientes.listarTodos());


/*
    Evento: click
    Alvo  : #tabela-pacientes
    Ação  : Remover um paciente da tabela
 */
document.querySelector('#tabela-pacientes').addEventListener(
    'dblclick',
    function (event) {
        var trPaciente = event.target.parentNode;
        trPaciente.classList.add('fade-out');
        setTimeout(function () {
            TabelaPacientes.removerTr(trPaciente);
            StoragePacientes.remover(TabelaPacientes.obterPaciente(trPaciente));
        }, 300)
    });


/*
    Evento: click
    Alvo  : #button-busca
    Ação  : Buscar pacientes via Api Webservice
 */
document.querySelector('#button-busca').addEventListener(
    'click',
    function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
        xhr.addEventListener('load', function () {
            var erro = document.querySelector('#erro-busca');
            if (xhr.status == 200) {
                erro.classList.add('invisivel');
                var resposta = xhr.responseText;
                var pacientes = JSON.parse(resposta);
                pacientes.forEach(function (paciente) {
                    StoragePacientes.adicionar(paciente);
                });
                window.location.reload();
            }
            else {
                erro.textContent = "Erro ao carregar pacientes: " + xhr.status;
                erro.classList.remove('invisivel');
            }
        });
        xhr.send();
    });

    
/*
    Evento: input
    Alvo  : #input-filtro
    Ação  : Filtrar pacientes pelo nome
 */
document.querySelector('#input-filtro').addEventListener(
    'input',
    function (event) {
        var pacientes = document.querySelectorAll('.tr-paciente');

        if (event.target.value.length > 0) {
            pacientes.forEach(function (paciente) {
                var nome = paciente.querySelector('.td-nome').textContent;
                var expressao = new RegExp(event.target.value, 'i');
                if (!expressao.test(nome)) {
                    paciente.classList.add('invisivel');
                }
                else {
                    paciente.classList.remove('invisivel');
                }
            });
        }
        else {
            pacientes.forEach(function (paciente) {
                paciente.classList.remove('invisivel');
            });
        }
    });