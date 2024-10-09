const botaoSobreNos = document.getElementById('sobre-nos');
const botaoCafeteria = document.getElementById('cafeteria');
const botaoContato = document.getElementById('contato');
const botaoConhecer = document.getElementById('botaoConhecer');
const botaoFaleConosco = document.getElementById('botaoFale');
const prox = document.getElementById('flecha-dir');
const ant = document.getElementById('flecha-esq');

let aux = 0;
let widgets = document.getElementsByClassName("item");

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
    // Referências às setas
    const leftArrow = document.getElementById('flecha-esq');
    const rightArrow = document.getElementById('flecha-dir');

    // Pegamos todos os itens do carrossel
    const items = document.querySelectorAll('.item');
    
    // Definimos o número de itens visíveis (3 neste caso)
    const visibleItemsCount = 3;
    let currentIndex = 0;  // Controla o índice do primeiro item visível

    // Função para atualizar a exibição dos itens do carrossel
    function updateCarousel() {
        // Oculta todos os itens
        items.forEach((item, index) => {
            item.style.display = 'none';
        });

        // Mostra apenas os 3 itens visíveis a partir do índice atual
        for (let i = currentIndex; i < currentIndex + visibleItemsCount; i++) {
            if (items[i]) {
                items[i].style.display = 'flex';  // Ou a propriedade que você preferir para o layout
            }
        }
    }

    // Inicializa o carrossel mostrando os primeiros 3 itens
    updateCarousel();

    // Lógica para o botão da seta direita (próximo)
    rightArrow.addEventListener('click', () => {
        // Checa se há mais itens para exibir à direita
        if (currentIndex + visibleItemsCount < items.length) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Lógica para o botão da seta esquerda (anterior)
    leftArrow.addEventListener('click', () => {
        // Checa se há mais itens para exibir à esquerda
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});







/*prox.addEventListener('click', () => {
    if(aux === 0) {
        ;
    } else {
        widgets[aux+2].style.display = "none";
        aux--;
        widgets[aux].style.display = "flex";
    }
});

ant.addEventListener('click', () => {
    if(aux === 3) {
        ;
    } else {
        widgets[aux].style.display = "none";
        aux++;
        widgets[aux+2].style.display = "flex";
    }
});*/