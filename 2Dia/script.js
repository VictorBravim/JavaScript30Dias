function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourDeg = (hours % 12 + minutes / 60) * 360 / 12;
    const minDeg = (minutes + seconds / 60) * 360 / 60;
    const secondDeg = seconds * 360 / 60;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo
updateClock(); // Chama a função uma vez para iniciar o relógio imediatamente
