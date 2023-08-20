const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
//esse if é para ajudar quando for acessar no celular
        gambiarraParaCelular();
        removerSelecaoDoPersonagem();

        personagem.classList.add("selecionado");

        alterarImagemDoPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);
        
        alterarDescricaoPersonagem(personagem);
        
    })
})
function gambiarraParaCelular() {
    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

