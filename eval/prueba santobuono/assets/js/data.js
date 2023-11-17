// Pido los datos cada segundo
setInterval(() => {
    // Pido los datos a la ruta /data/update
    fetch("/data/update")
    .then(response => response.json())
    .then(data => {
        // Guardo el valor de luz
        const luz = data.cpu_luz;
        // Maximo valor de luz
        const max_luz = 100;
        // Lo escalo a un valor entre -30 y 240 grados
        const deg = luz * 270 / max_luz - 30;
        // Lo cambio en la aguja
        document.querySelector(".gauge .pointer .hand").style.transform = `rotate(${deg}deg)`;
    })
    
}, 200);
