class FormPacientes {

    static formulario = document.querySelector('#form-adiciona');

    static buscar() {
        return new Paciente(
            FormPacientes.formulario.nome.value,
            FormPacientes.formulario.peso.value,
            FormPacientes.formulario.altura.value,
            FormPacientes.formulario.gordura.value
        );
    }

    static validar(paciente) {
        var erros = [];
        if (!Paciente.validaNome(paciente.nome)) erros.push('Nome inválido');   
        if (!Paciente.validaPeso(paciente.peso)) erros.push('Peso inválido');    
        if (!Paciente.validaAltura(paciente.altura)) erros.push('Altura inválida');    
        if (!Paciente.validaGordura(paciente.gordura)) erros.push('Gordura inválida');          
        return erros;
    }

    static exibirErros(erros) {
        var ul = document.querySelector('#ul-erros-adiciona');
        ul.innerHTML = "";
        erros.forEach(function (erro) {
            var li = document.createElement('li');
            li.textContent = erro;
            ul.appendChild(li);
        })
    }
}