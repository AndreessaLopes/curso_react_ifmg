function processarFormulario() {

    console.clear();

    function pegarValor(id) {
        return document.getElementById(id)?.value || "Não informado";
    }

    function pegarRadio(nome) {
        const selecionado = document.querySelector(`input[name="${nome}"]:checked`);
        return selecionado ? selecionado.value : "Não informado";
    }

    function pegarCheckbox(nome) {
        const valores = [];
        document.querySelectorAll(`input[name="${nome}"]:checked`)
            .forEach(item => valores.push(item.value));
        return valores.length > 0 ? valores : ["Nenhuma"];
    }

    const prontuario = {
        identificacao: {
            nome: pegarValor("nome"),
            nomeSocial: pegarValor("nomeSocial"),
            estadoCivil: pegarValor("estadoCivil"),
            nomeConjuge: pegarValor("nomeConjuge")
        },

        biologicos: {
            dataNascimento: pegarValor("dataNasc"),
            sexo: pegarRadio("sexo"),
            corRaca: pegarRadio("cor"),
            altura: pegarValor("altura") + " cm",
            peso: pegarValor("peso") + " kg"
        },

        ocupacionais: {
            ocupacao: pegarValor("ocupacao"),
            cargaHoraria: pegarValor("carga") + " h/semana"
        },

        moradia: {
            endereco: pegarValor("endereco"),
            cidade: pegarValor("cidade"),
            estado: pegarValor("estado")
        },

        atendimento: {
            acompanhante: pegarValor("acompanhante"),
            relacao: pegarValor("relacao"),
            telefone: pegarValor("telefone"),
            data: pegarValor("dataAtendimento"),
            horario: pegarValor("horaAtendimento")
        },

        clinico: {
            doencas: pegarCheckbox("doencas[]"),
            medicamentos: pegarValor("medicamentos"),
            observacoes: pegarValor("info")
        }
    };

    console.log(prontuario);

}