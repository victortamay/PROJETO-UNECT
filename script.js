const botaoSobreNos = document.getElementById('sobre-nos');
const botaoCafeteria = document.getElementById('cafeteria');
const botaoContato = document.getElementById('contato');
const botaoConhecer = document.getElementById('botaoConhecer');
const botaoFaleConosco = document.getElementById('botaoFale');
const botaoMenu = document.getElementById('menu');
const botaoMenuFechar = document.getElementById('menuFechar');
const Menu = document.getElementById('menuAberto');

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

function atualizarDimensoes() {
    const larguraDeTela = window.innerWidth;
    const alturaDeTela = window.innerHeight;

    let visiveis = 0;
    if (larguraDeTela <= 1500) {
        visiveis = 1;
    } else {
        visiveis = 3;
    }

    return visiveis;
}

document.addEventListener('DOMContentLoaded', () => {
    const ant = document.getElementById('flecha-esq');
    const prox = document.getElementById('flecha-dir');

    const items = document.querySelectorAll('.item');
    
    let visiveis = atualizarDimensoes();
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

    window.addEventListener('resize', () => {
        visiveis = atualizarDimensoes();  
        attCarrossel();  
    });
    
});

botaoMenu.addEventListener('click', () => {
    Menu.style.display = "block";
});

botaoMenuFechar.addEventListener('click', () => {
    Menu.style.display = "none";
});

window.addEventListener('click', (event) => {
    if(event.target == Menu){
        Menu.style.display = "none";
    }
});






