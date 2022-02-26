import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha');
const qtdCaracteres = document.querySelector('.numero');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', event => {
        event.preventDefault();
        adicionaValores();
    })

    function adicionaValores() {
        senhaGerada.innerHTML = '';
        if(!gera()) {
            senhaGerada.innerHTML = 'Nada selecionado.';
            return;
        }
        senhaGerada.appendChild(criaElemento('h3', 'Sua senha:'));
        senhaGerada.appendChild(criaElemento('p', gera()));
    }

    function gera() {
        const senha = geraSenha(
            qtdCaracteres.value,
            maiusculas.checked, 
            minusculas.checked, 
            numeros.checked, 
            simbolos.checked
        );
        return senha;
    }

    function criaElemento(elemento, content) {
        const el = document.createElement(elemento);
        el.innerHTML = content;
        return el;
    }

}