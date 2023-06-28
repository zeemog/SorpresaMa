document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.getElementById('passwordInput').value;

    // Carga la contraseña deseada en la siguiente variable
    var passwordCorrecta = '1411'; // Reemplaza con tu propia contraseña

    if (password === passwordCorrecta) {
        // Si la contraseña es correcta, muestra el temporizador y oculta el formulario de inicio de sesión
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('countdown').style.display = 'block';

        // Cambia el texto del h3 al ingresar la contraseña
        var headerText = document.getElementById('container').getElementsByTagName('h3')[0];
        headerText.textContent = 'Hola Mami, el día de tu cumpleaños podrás disfrutar de tu regalo.';

        // Calcula el tiempo restante hasta el próximo cumpleaños
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var birthday = new Date(currentYear + '-07-02'); // Cambia la fecha a la del cumpleaños deseado

        //if (currentDate > birthday) {
        //    birthday.setFullYear(currentYear + 1);
        //}


        var timeRemaining = birthday - currentDate;

        // Actualiza el temporizador cada segundo
        var countdownElement = document.getElementById('countdown');
        var countdownInterval = setInterval(function() {
            var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.textContent = 'Faltan: ' + days + ' días, ' + hours + ' horas, ' + minutes + ' minutos, ' + seconds + ' segundos';

            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown').style.display = 'none';
                document.getElementById('birthdayContent').style.display = 'block';
                headerText.style.display = 'none';
            }

            timeRemaining -= 1000;
        }, 1000);
    } else {
        // Si la contraseña es incorrecta, muestra un mensaje de error
        alert('Contraseña incorrecta. Por favor, intenta nuevamente.');
    }
});
