function validateLogin() {
    let username = $('#username').val();
    let password = $('#password').val();
    let message = "<ul>";
    let valid = true;
    let regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(username)) {
        message += "<li>L'username non rispetta il formato adatto.</li>";
        valid = false;
    }
    if (username.length < 3 || username.length > 20) {
        message += "<li>L'username deve avere una lunghezza compresa tra i 3 e i 20 caratteri.</li>";
        valid = false;
    }
    if (password.length < 6 || password.length > 64) {
        message += "<li>La password deve avere una lunghezza compresa tra i 6 e i 64 caratteri.</li>";
        valid = false;
    }

    return isValid(valid, message);
}

function validateRegistration() {
    let name = $('#nome').val().trim();
    let surname = $('#cognome').val().trim();
    let email = $('#email').val().trim();
    let indirizzo = $('#indirizzo').val().trim();
    let paese = $('#paese').val().trim();
    let cap = $('#cap').val().trim();
    let password = $('#password').val();
    let sesso = $('#sesso').val();
    let confirmPassword = $('#confirmPassword').val();
    let username = $('#username').val().trim();
    let dataDiNascita = $('#data').val();
    let message = "<ul>";
    let valid = true;
    let regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(username)) {
        message += "<li>L'username non rispetta il formato adatto.</li>";
        valid = false;
    }
    if (username.length < 3 || username.length > 20) {
        message += "<li>L'username deve avere una lunghezza compresa tra i 3 e i 20 caratteri.</li>";
        valid = false;
    }

    regex = /^[a-zA-Z]+$/;
    if (!regex.test(name)) {
        message += "<li>Il nome non rispetta il formato adatto.</li>";
        valid = false;
    }
    if (name.length < 2 || name.length > 32) {
        message += "<li>Il nome deve avere una lunghezza compresa tra i 2 e i 32 caratteri.</li>";
        valid = false;
    }

    if (!regex.test(surname)) {
        message += "<li>Il cognome non rispetta il formato adatto.</li>";
        valid = false;
    }
    if (surname.length < 2 || surname.length > 32) {
        message += "<li>Il cognome deve avere una lunghezza compresa tra i 2 e i 32 caratteri.</li>";
        valid = false;
    }

    regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!regex.test(email)) {
        message += "<li>Email non valida.</li>";
        valid = false;
    }

    if (password.length < 6 || password.length > 64) {
        message += "<li>La password deve avere una lunghezza compresa tra i 6 e i 64 caratteri.</li>";
        valid = false;
    }
    if (password !== confirmPassword) {
        message += "<li>Le password non corrispondono.</li>";
        valid = false;
    }

    let oggi = new Date();
    let date = new Date(dataDiNascita);
    let minDate = new Date('1900-01-01');
    if (date < minDate || date > oggi) {
        message += "<li>Data di nascita non valida.</li>";
        valid = false;
    }

    if (sesso == null) {
        message += "<li>Inserisci il sesso.</li>";
        valid = false;
    } else if (sesso !== "Maschio" && sesso !== "Femmina" && sesso !== "Altro") {
        message += "<li>Sesso non valido.</li>";
        valid = false;
    }

    regex = /[A-Za-z ]+[,][ ]?[0-9A-Za-z]+/
    if (!regex.test(indirizzo)) {
        message += "<li>Indirizzo non valido.</li>";
        valid = false;
    }
    if (indirizzo.length < 4 || indirizzo.length > 64) {
        message += "<li>L'indirizzo deve avere una lunghezza compresa tra i 4 e i 64 caratteri.</li>";
        valid = false;
    }

    regex = /^[0-9]{5}$/
    let c = Number(cap);
    if (!regex.test(cap) || c < 10 || c > 97100) {
        message += "<li>CAP non valido.</li>";
        valid = false;
    }

    regex = /^[a-zA-Z]+$/
    if (!regex.test(paese)) {
        message += "<li>Paese non valido.</li>";
        valid = false;
    }
    if (paese.length < 3 || paese.length > 32) {
        message += "<li>Il paese deve avere una lunghezza compresa tra i 3 e i 32 caratteri.</li>";
        valid = false;
    }

    return isValid(valid, message);
}

function validateBooking() {
    let name = $('#nomeProdotto').val().trim();
    let email = $('#email').val().trim();
    let descrizione = $('#descrizione').val().trim();
    let categoria = $('#categoria').val();
    let message = "<ul>";
    let copertina = $('#copertina')[0].files[0];
    let valid = true;
    let regex = /^[\w:'".,;()!?+&\- ]+$/;

    if (!regex.test(name)) {
        message += "<li>Formato nome non valido.</li>";
        valid = false;
    }
    if (name.length < 2 || name.length > 32) {
        message += "<li>Il nome deve avere una lunghezza compresa tra i 2 e i 32 caratteri.</li>";
        valid = false;
    }

    if (descrizione.length < 10 || descrizione.length > 2048) {
        message += "<li>La descrizione deve avere una lunghezza compresa tra i 10 e i 2048 caratteri.</li>";
        valid = false;
    }

    regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!regex.test(email)) {
        message += "<li>Email non valida.</li>";
        valid = false;
    }

    if (categoria == null) {
        message += "<li>Inserisci la categoria.</li>";
        valid = false;
    } else if (categoria !== "Strategia" && categoria !== "Sport" && categoria !== "RPG" && categoria !== "Simulazione" && categoria !== "Action/Adventure"
        && categoria !== "Sparatutto" && categoria !== "Picchiaduro" && categoria !== "Guida" && categoria !== "Platform") {
        message += "<li>Categoria non valida.</li>";
        valid = false;
    }

    if (copertina) { // Controlla se esiste
        if (copertina.type !== 'image/jpeg' && copertina.type !== 'image/png') {
            message += "<li>Formato immagine non supportato.</li>";
            valid = false;
        }
    } else {
        message += "<li>Errore nel caricamento dell'immagine.</li>";
        valid = false;
    }

    return isValid(valid, message);
}

function validateAddProduct() {
    let nome = $('#nome').val();
    let descrizione = $('#descrizione').val();
    let quantita = $('#quantita').val();
    let prezzo = $('#prezzo').val();
    let categoria = $('#categoria').val();
    let piattaforma = $('#piattaforma').val();
    let scontoAttivo = $('#scontoAttivo').val();
    let copertina = $('#copertina')[0].files[0];
    let message = "<ul>";
    let valid = true;
    let regex = /^[\w:'".,;()!?+&\- ]+$/;

    if (!regex.test(nome)) {
        message += "<li>Formato nome non valido.</li>";
        valid = false;
    }
    if (nome.length < 3 || nome.length > 100) {
        message += "<li>Il nome deve avere una lunghezza compresa tra i 3 e i 100 caratteri.</li>";
        valid = false;
    }
    if (descrizione.length < 10 || descrizione.length > 2048) {
        message += "<li>La descrizione deve avere una lunghezza compresa tra i 10 e i 2048 caratteri.</li>";
        valid = false;
    }
    if (Number(quantita) < 1) {
        message += "<li>La quantità non può essere minore di 1.</li>";
        valid = false;
    }
    if (Number(prezzo) < 0.01) {
        message += "<li>Il prezzo non può essere inferiore a 0,01.</li>";
        valid = false;
    }
    if (Number(scontoAttivo) < 0 || Number(scontoAttivo) > 0.99) {
        message += "<li>Lo sconto attivo deve essere compreso tra 0 e 0.99.</li>";
        valid = false;
    }
    if (categoria == null) {
        message += "<li>Inserisci la categoria.</li>";
        valid = false;
    } else if (categoria !== "Strategia" && categoria !== "Sport" && categoria !== "RPG" && categoria !== "Simulazione" && categoria !== "Action/Adventure"
        && categoria !== "Sparatutto" && categoria !== "Picchiaduro" && categoria !== "Guida" && categoria !== "Platform") {
        message += "<li>Categoria non valida.</li>";
        valid = false;
    }

    if (piattaforma == null) {
        message += "<li>Inserisci la piattaforma.</li>";
        valid = false;
    } else if (piattaforma !== "PlayStation 5" && piattaforma !== "Xbox Series X|S" && piattaforma !== "Nintendo Switch" && piattaforma !== "PC"
        && piattaforma !== "PlayStation 4" && piattaforma !== "Xbox One") {
        message += "<li>Piattaforma non valida.</li>";
        valid = false;
    }

    if (copertina) { // Controlla se esiste
        if (copertina.type !== 'image/jpeg' && copertina.type !== 'image/png') {
            message += "<li>Formato immagine non supportato.</li>";
            valid = false;
        }
    } else {
        message += "<li>Errore nel caricamento dell'immagine.</li>";
        valid = false;
    }

    return isValid(valid, message);
}

function isValid(valid, message) {
    if (!valid) {
        message += "</ul>";
        alertBox(message, "danger");
    }
    return valid;
}
