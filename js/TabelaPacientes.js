class TabelaPacientes {

    static tabela = document.querySelector('#tabela-pacientes');

    static preencher(pacientes) {
        pacientes.forEach(function (paciente) {
            var pacienteTr = TabelaPacientes.criarTr(paciente);
            TabelaPacientes.validarTr(pacienteTr);
            TabelaPacientes.tabela.appendChild(pacienteTr);
        });        
    }

    static validarTr(pacienteTr) {
        var tdPeso = pacienteTr.querySelector('.td-peso');
        if (!Paciente.validaPeso(tdPeso.textContent)) {
            tdPeso.textContent = 'Peso inválido';
            pacienteTr.classList.add('paciente-invalido');
        }
        var tdAltura = pacienteTr.querySelector('.td-altura');
        if (!Paciente.validaAltura(tdAltura.textContent)) {
            tdAltura.textContent = 'Altura inválida';
            pacienteTr.classList.add('paciente-invalido');
        }
        var tdGordura = pacienteTr.querySelector('.td-gordura');
        if (!Paciente.validaGordura(tdGordura.textContent)) {
            tdGordura.textContent = 'Gordura inválida';
            pacienteTr.classList.add('paciente-invalido');
        }        
    }

    static criarTr(paciente) {
        var pacienteTr = document.createElement('tr');
        pacienteTr.classList.add('tr-paciente');
        pacienteTr.appendChild(TabelaPacientes.criarTd(paciente.nome, 'td-nome'));
        pacienteTr.appendChild(TabelaPacientes.criarTd(paciente.peso, 'td-peso'));
        pacienteTr.appendChild(TabelaPacientes.criarTd(paciente.altura, 'td-altura'));
        pacienteTr.appendChild(TabelaPacientes.criarTd(paciente.gordura, 'td-gordura'));
        pacienteTr.appendChild(TabelaPacientes.criarTd(paciente.imc.toFixed(2), 'td-imc'));
        return pacienteTr;
    }

    static criarTd(conteudo, classe) {
        var td = document.createElement('td');
        td.textContent = conteudo;
        td.classList.add(classe);
        return td;
    }

    static removerTr(trPaciente) {
        trPaciente.remove();
    }

    static obterPaciente(trPaciente) {
        console.log(trPaciente);
        const nome = trPaciente.querySelector('.td-nome').textContent;
        const peso = trPaciente.querySelector('.td-peso').textContent;
        const altura = trPaciente.querySelector('.td-altura').textContent;
        const gordura = trPaciente.querySelector('.td-gordura').textContent;
        const paciente = new Paciente(nome, peso, altura, gordura);
        return paciente;
    }
}

