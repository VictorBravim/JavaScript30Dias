// Adiciona um ouvinte de eventos para capturar pressionamento de tecla
window.addEventListener('keydown', playSound);

// Função chamada quando uma tecla é pressionada
function playSound(e) {
    // Procura um elemento de áudio com o atributo data-key correspondente ao código da tecla
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // Procura um elemento com a classe .key e o atributo data-key correspondente ao código da tecla
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Se não encontrar o elemento de áudio, encerra a função
    if (!audio) return;

    // Reinicia a reprodução do áudio
    audio.currentTime = 0;
    audio.play();

    // Adiciona a classe 'playing' ao elemento da tecla para efeitos visuais
    key.classList.add('playing');

    // Remove a classe 'playing' após 100 milissegundos para restaurar o estado visual
    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);
}