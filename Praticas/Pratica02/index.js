const readline = require('readline-sync');

const contatoControlador = require('./controlador');

function menu () {
    console.log("1 - Adicionar contato");
    console.log("2 - Listar contatos");
    console.log("3 - Buscar contato");
    console.log("4 - Atualizar contato");
    console.log("5 - Remover contato");
    console.log("6 - Sair");
};

function escolherOpcao (opcao) {
    switch (opcao) {
        case "1":
            const nome = readline.question("Nome: ");
            const email = readline.question("Email: ");
            const telefone = readline.question("Telefone: ");
            contatoControlador.adicionarContato(nome, email, telefone);
            break;
        case "2":
            const contatos = contatoControlador.listarContatos();
            contatos.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Email: ${contato.email}, Telefone: ${contato.telefone}`);
            });
            break;
        case "3":
            const nomeBusca = readline.question("Nome: ");
            const contato = contatoControlador.buscarContato(nomeBusca);
            if (contato) {
                console.log(`Nome: ${contato.nome}, Email: ${contato.email}, Telefone: ${contato.telefone}`);
            } else {
                console.log("Contato não encontrado")
            };
            break;
        case "4":
            const nomeAtualizar = readline.question("Nome: ");
            const novoEmail = readline.question("Email: ");
            const novoTelefone = readline.question("Telefone: ");
            contatoControlador.atualizarContato(nomeAtualizar, novoEmail, novoTelefone);
            break;
        case "5":
            const removerNome = readline.question("Nome: ")
            contatoControlador.removerContato(removerNome);
            break;
        case "6":
            process.exit()
    }
}

function main () {
    while (true) {
        menu();
        const opcao = readline.question("Escolha uma opcao: ");
        escolherOpcao(opcao);
    };
};

main();