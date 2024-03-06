document.addEventListener('DOMContentLoaded', function() {
    // Intervalo de atualização do relógio em milissegundos
    const inc = 1000;

    // Função responsável por atualizar as posições dos ponteiros do relógio
    function clock() {
        // Obtém a data atual
        const date = new Date();

        // Calcula as horas no formato de relógio de 12 horas
        const hours = ((date.getHours() + 11) % 12 + 1);
        
        // Obtém os minutos e segundos
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        // Calcula os ângulos de rotação para os ponteiros
        const hour = hours * 30;
        const minute = minutes * 6;
        const second = seconds * 6;
        
        // Atualiza a rotação dos ponteiros no DOM
        document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
        document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
        document.querySelector('.second').style.transform = `rotate(${second}deg)`;
    }

    // Inicia o relógio e o atualiza a cada intervalo definido por 'inc'
    setInterval(clock, inc);
});
