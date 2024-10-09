const botaoSobreNos = document.getElementById('sobre-nos');
const botaoCafeteria = document.getElementById('cafeteria');
const botaoContato = document.getElementById('contato');
const botaoConhecer = document.getElementById('botaoConhecer');
const botaoFaleConosco = document.getElementById('botaoFale');


botaoSobreNos.addEventListener('click', () => {
    sobreNos.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});

botaoCafeteria.addEventListener('click', () => {
    carrosselPrinc.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});

botaoContato.addEventListener('click', () => {
    entreEmContato.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});

botaoConhecer.addEventListener('click', () => {
    carrosselPrinc.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});

botaoFaleConosco.addEventListener('click', () => {
    entreEmContato.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
});

document.addEventListener('DOMContentLoaded', () => {
    const ant = document.getElementById('flecha-esq');
    const prox = document.getElementById('flecha-dir');

    const items = document.querySelectorAll('.item');
    
    const visiveis = 3;
    let aux = 0;

    function attCarrossel() {
        items.forEach((item, index) => {
            item.style.display = 'none';
        });

        for (let i = aux; i < aux + visiveis; i++) {
            if (items[i]) {
                items[i].style.display = 'flex'; 
            }
        }
    }

    attCarrossel();

    prox.addEventListener('click', () => {
        if (aux + visiveis < items.length) {
            aux++;
            attCarrossel();
        }
    });

    ant.addEventListener('click', () => {
        if (aux > 0) {
            aux--;
            attCarrossel();
        }
    });
});


