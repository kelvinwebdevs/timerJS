function relogio() {
    const relogio = document.querySelector('.relogio');
    const inicar = document.querySelector('.inicar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;


    function criaHoraDosSegundos(segundos) {

        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }


    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('inicar')) {
            clearInterval(timer)
            iniciaRelogio();
            relogio.style.color = 'black'
        }
        if (element.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.style.color = 'red'
        }
        if (element.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            relogio.style.color = 'black'
            segundos = 0;
        }
    })

    iniciaRelogio();

}

relogio();
