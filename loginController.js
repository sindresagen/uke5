
        // controller
        function logIn() {
            if (username === 'sindre' && password === 'hemmelig') {
                screen = 'main';
                errorMessage = null;
                isLoggedIn = true;               
            } else {
                screen = 'login';
                errorMessage = 'Feil brukernavn og/eller passord. Prøv igjen!';
                isLoggedIn = false;
            }
            show();
        }