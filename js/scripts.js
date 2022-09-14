$(document).ready(function () {
    $('<div class="alert alert-info" role="alert">This site is a demo of my <a target="_blank" href="https://github.com/Themko30/G8_Gaming" class="alert-link">University project</a>. No product is available for purchase.</div>').insertAfter('#header');

    // tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // bottone per tornare all'inizio della pagina
    const mybutton = document.getElementById("backtotop");
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // barra di ricerca
    $('#cercaInput').keyup(function (e) {
        let query = $(this).val().trim().toLowerCase();
        if (query === '') {
            $('#s-res').hide();
            return;
        }

        if (e.keyCode === 13) { // Se viene premuto il tasto Invio
            $('#cercaBtn').trigger('click'); // Invia la ricerca
        }

        query = query.split(" ");
        let results = $('#results');
        results.empty();

        $('#s-res').show();
        $.getJSON('assets/games.json', function (data) {
            let found = false;
            let counter = 0;
            data.forEach(function (item) {
                if (counter < 10) {
                    if (findString(query, item["nome"].toLowerCase())) {
                        results.append("<li><a href='videogioco?id=" + item["codice"] + "'>" + item["nome"] + "</a></li>");
                        found = true;
                        counter++;
                    }
                }
            });
            if (!found) {
                results.append("<li>Nessun prodotto trovato</li>");
            }
        });
        results.show();
    });
});

function cerca() {
    let query = $('#cercaInput').val();
    return query !== undefined && query !== null && query.trim() !== '';
}

function findString(arr, str) {
    let flag = false;
    let strArr = str.split(' ');
    arr.forEach(function (s) {
        strArr.forEach(function (s2) {
            if (s2.includes(s)) {
                flag = true;
            }
        });
    });
    return flag;
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Errori validator
function alertBox(message, type, id) {
    if (id === undefined || id === null) {
        id = '#liveAlertPlaceholder';
    }
    let alertPlaceholder = $(id);
    alertPlaceholder.hide();
    alertPlaceholder.empty();
    let wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    alertPlaceholder.append(wrapper);
    alertPlaceholder.show(300);
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getDivFromGame(game) {
    let price = game['prezzo'] * (1 - game['scontoAttivo']);
    return '<div class="col-sm my-2 mx-3">\
        <div class="card text-center prodotto" id="' + game['codice'] + '" style="width: 12rem;">\
        <img loading="lazy" src="images/' + game['copertina'] + '" class="card-img-top p-2" alt="Immagine di ' + game['nome'] + '">\
        <div class="card-body">\
        <h5 class="card-title">' + game['nome'] + '<br>\
        <span class="price">€' + price.toFixed(2) + '</span></h5>\
        <h6 class="card-subtitle text-muted">' + game['categoria'] + '<br>' + game['piattaforma'] + '</h6>\
        </div></div></div>';
}

function getPlatformName(code) {
    switch (code) {
        case 'ps5':
            return "PlayStation 5";
        case 'seriesx':
            return "Xbox Series X|S";
        case 'switch':
            return "Nintendo Switch";
        case 'pc':
            return "PC";
        case 'ps4':
            return "PlayStation 4";
        case 'xboxone':
            return "Xbox One";
        default:
            return "null";
    }
}

function getPlatformCode(name) {
    switch (name) {
        case 'PlayStation 5':
            return "ps5";
        case 'Xbox Series X|S':
            return "seriesx";
        case 'Nintendo Switch':
            return "switch";
        case 'PC':
            return "pc";
        case 'PlayStation 4':
            return "ps4";
        case 'Xbox One':
            return "xboxone";
        default:
            return "null";
    }
}
