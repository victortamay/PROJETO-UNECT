const botaoSobreNos = document.getElementById('sobre-nos');
const botaoCafeteria = document.getElementById('cafeteria');
const botaoContato = document.getElementById('contato');
const botaoConhecer = document.getElementById('botaoConhecer');
const botaoFaleConosco = document.getElementById('botaoFale');
const botaoMenu = document.getElementById('botao-menu');
const botaoMenuFechar = document.getElementById('menuFechar');
const Menu = document.getElementById('menuAberto');
const Home = document.getElementById('header');

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

function homePos(){
    Menu.style.display = 'none';
    botaoMenu.style.width = 'auto'; 
    botaoMenu.style.height = 'auto'; 
    Home.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    openMenu = false;
}

function sobreNosPos(){
    Menu.style.display = 'none';
    botaoMenu.style.width = 'auto'; 
    botaoMenu.style.height = 'auto'; 
    sobreNos.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    openMenu = false;
}

function cafeteriaPos(){
    Menu.style.display = 'none';
    botaoMenu.style.width = 'auto'; 
    botaoMenu.style.height = 'auto'; 
    carrosselPrinc.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    openMenu = false;
}

function contatoPos(){
    Menu.style.display = 'none';
    botaoMenu.style.width = 'auto'; 
    botaoMenu.style.height = 'auto'; 
    entreEmContato.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    openMenu = false;
}

let openMenu = false;

botaoMenu.addEventListener('click', () => {
    if(openMenu){
        Menu.style.display = 'none';
        openMenu = false;
        botaoMenu.style.width = 'auto'; 
        botaoMenu.style.height = 'auto'; 
        botaoMenu.src = 'res/menu-icon.png';
    } else {
        Menu.style.display = 'flex';
        openMenu = true;
        
        botaoMenu.src = "res/close.png";
    }
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










