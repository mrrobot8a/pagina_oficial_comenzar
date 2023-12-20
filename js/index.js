document.addEventListener('DOMContentLoaded', function () {
    const myVideo = document.getElementById('myVideo');

    setTimeout(function () {
        document.getElementById('container').classList.add('opened');
        document.getElementById('topHalf').classList.add('opened');
        document.getElementById('bottomHalf').classList.add('opened');
    }, 4200); // Delay para que ocurra después de la rotación del círculo

    document.getElementById('circle').addEventListener('animationend', function () {
        // document.getElementById('circle').style.opacity = 0;
        // document.getElementById('circle').style.transform = 'scale(0)';
        document.getElementById('myVideo').play();

        const progressBar = document.getElementById('myBar');
    
        // Inicia la simulación de carga y muestra el iframe al completar
        simulateLoading(progressBar, 5000, showIframe); // Duración de 3000 ms (3 segundos)
        // setTimeout(function () {
        //     // document.getElementById('circle').remove();
        // }, 10000);
    });

    myVideo.addEventListener('ended', function () {
        // document.querySelector('.container-video').classList.add('reveal');
        document.getElementById('circle').remove();
        document.getElementById('expandingCircle').classList.add('expaned');
        
        setTimeout(function () {
            
            document.querySelector('.container-video').remove();
            
            // Después de eliminar el contenedor de video, activar la animación del contenedor principal

        }, 3000);
    });
    


    function simulateLoading(progressElement, duration, callback) {
        let width = 1;
        let numeroCargando = 0;
        const interval = duration / 100;
        
    
        const loading = setInterval(() => {
            if (numeroCargando >= 100) {
                clearInterval(loading);
                // progressElement.style.width = '100%';
                // progressElement.textContent = '100%';
    
                // Iniciar animación de desvanecimiento
                fadeOutElement(document.getElementById('loadingIndicato'), callback);
            } else {
                width++;
                numeroCargando++;
                progressElement.style.width = width + '%';
               
                document.getElementById("value1").innerHTML = numeroCargando + "%";
            }
        }, interval);
    }
    
    function fadeOutElement(element, callback) {
        element.style.transition = 'opacity 1s ease';
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
            callback(); // Llamar al callback después de que la animación termine
        }, 1000); // Duración de la animación de desvanecimiento
    }
    
    function showIframe() {
        const iframe = document.getElementById('myIframe');
        iframe.style.display = 'block'; // Muestra el iframe
    }
    
   
});
