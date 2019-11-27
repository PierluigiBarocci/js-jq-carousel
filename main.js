// Provate a riprodurre uno slider di immagini simile a quello visto a lezione, con grafica totalmente a piacere!
// BONUS: cambiare immagine cliccando sui pallini (mostrando quindi l'immagine con indice corrispondente)
// Nome repo: js-jq-carousel

$('.rounded.arrow.right').click(function(){
    // creiamo due variabili per non ripetere sempre img corrente e la sua successiva
    var imgCorrente = $('img.active');
    var imgSuccessiva = imgCorrente.next('img');
    // a ogni click togli dalla img corrente la classe active e aggiungila a quella dopo, la classe active è quella che gestisce il display:block/none nel css
    imgCorrente.removeClass('active');
    imgSuccessiva.addClass('active');
    // visto che dovró usare il last per fare lo stesso discorso per le sinistre, allora la sfrutto anche qua: se l'immagine corrente ha la classe last, quindi so che è in posizione finale, allora la successiva diventa la prima, che prenderà la classe active, e il circo ricomincia
    if (imgCorrente.hasClass('last')) {
        imgSuccessiva = $('img.first').addClass('active');
    };
});

$('.rounded.arrow.left').click(function(){
    var imgCorrente = $('img.active');
    var imgPrecedente = imgCorrente.prev('img');
    imgCorrente.removeClass('active');
    imgPrecedente.addClass('active');
    if (imgCorrente.hasClass('first')) {
        imgPrecedente = $('img.last').addClass('active');
    };

});
