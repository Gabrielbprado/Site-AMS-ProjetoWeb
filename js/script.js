let posicaoAtual = 0;

function moverCarrossel(direcao) {
    const carrossel = document.getElementById('carrossel');
    const larguraImagem = document.querySelector('.img-carrossel').clientWidth;

    posicaoAtual += direcao;

    if (posicaoAtual > (carrossel.children.length - 1)) {
        posicaoAtual = 0;
    }

    if (posicaoAtual < 0) {
        posicaoAtual = carrossel.children.length - 1;
    }

    carrossel.style.transform = `translateX(${-posicaoAtual * larguraImagem}px)`;
}
