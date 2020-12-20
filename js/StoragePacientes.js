class StoragePacientes {

    static store = sessionStorage.getItem('storePacientes');

    static existe() {
        if (StoragePacientes.store == null)
        return false;
    else
        return true;
    }

    static criar() {
        var pacientes = [];
        pacientes.push(new Paciente("Paulo", 85, 1.85, 10));
        pacientes.push(new Paciente("Pedro", 80, 1.72, 40 ));
        pacientes.push(new Paciente("Ana Paula", 1000, 5, -1));
        pacientes.push(new Paciente("Douglas", 85, 1.73, 24));
        pacientes.push(new Paciente("Daniela", 46, 1.55, 19));
        StoragePacientes.store = JSON.stringify(pacientes);
        sessionStorage.setItem('storePacientes', StoragePacientes.store);
    }

    static listarTodos() {
        return JSON.parse(StoragePacientes.store);    
    }

    static adicionar(paciente) {
        var pacientes = JSON.parse(StoragePacientes.store);
        pacientes.push(paciente);
        StoragePacientes.store = JSON.stringify(pacientes);
        sessionStorage.setItem('storePacientes', StoragePacientes.store);    
    }

    static remover(pacienteRemover) {
        var pacientes = JSON.parse(StoragePacientes.store);
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            if (paciente.nome == pacienteRemover.nome) {
                pacientes.splice(i, 1);
                break;
            }
        }
        StoragePacientes.store = JSON.stringify(pacientes);
        sessionStorage.setItem('storePacientes', StoragePacientes.store);    
    }

    static removeStore() {
        sessionStorage.removeItem('storePacientes');
    }
}



