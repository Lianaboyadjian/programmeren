/* Hieronder staan de variabelen voor dit script. Een variabele is een stuk data in het geheugen van je computer. Met de juiste naam kun je bij die data en het gebruiken voor js.*/

var naamVanplant = document.querySelector('#naam');
var buttonEnter = document.querySelector('#buttonEnter');
var geefZaadjesbutton = document.querySelector('#zaadjes');
var afbeeldingLegepot = document.querySelector("#legepot");
var geefWaterbutton = document.querySelector('#water');
var geefZonbutton = document.querySelector('#zon');
var geefLiefdebutton = document.querySelector('#liefde');
/* Tim heeft mij geholpen bij het opzetten van de meter. Er wordt hier in principe elke keer een stap van de meter afgehaald door middel van een timer van 5sec.*/
var meterHoeveelheid = 100;
var gesteldheidsMeterplant = document.querySelector(".gesteldheid");
var dorrePlant = document.getElementById('dorreplant');
var gezondheidsbalk = document.querySelector(".gezondheidsbalk span");
var herhaal = document.getElementById("herhaalgame");

function naamVerzinnen() {
    var naamPlant = naamVanplant.value;
    waterme.textContent = naamPlant;
}

/* Ik heb hierboven een functie aangeroepen zodat de gebruiker de naam van zijn plant in kan typen. Functie wordt alleen aangeroepen als het script er om gevraagd heeft. */

function geefZaadjes() {
    meterHoeveelheid += 10;
    checkVariabele();
    afbeeldingLegepot.src = './images/geeftzaadjes.png';
}

function geefWater() {
    meterHoeveelheid += 10;
    checkVariabele();
    afbeeldingLegepot.src = './images/geeftwater.png';
}

function geefZon() {
    meterHoeveelheid += 10;
    checkVariabele();
    afbeeldingLegepot.src = './images/zon.png';
}

function geefLiefde() {
    meterHoeveelheid += 10;
    checkVariabele();
    afbeeldingLegepot.src = './images/liefde.png';
}

function metertje() {
    meterHoeveelheid -= 5;
    gezondheidsbalk.textContent = meterHoeveelheid;
    plantDood();
}

var meterAfbeeldingen = ["gezond10", "gezond8", "gezond6", "gezond4", "gezond2"];
var meterAfbeeldingenPath = "./images/";
var meterAfbeeldingenExtension = ".png";

function plantDood() {
    if (meterHoeveelheid > 80) {
        gesteldheidsMeterplant.src = meterAfbeeldingenPath + meterAfbeeldingen[0] + meterAfbeeldingenExtension;
    } else if (meterHoeveelheid > 60) {
        gesteldheidsMeterplant.src = meterAfbeeldingenPath + meterAfbeeldingen[1] + meterAfbeeldingenExtension;
    } else if (meterHoeveelheid > 40) {
        gesteldheidsMeterplant.src = meterAfbeeldingenPath + meterAfbeeldingen[2] + meterAfbeeldingenExtension;
    } else if (meterHoeveelheid > 20) {
        gesteldheidsMeterplant.src = meterAfbeeldingenPath + meterAfbeeldingen[3] + meterAfbeeldingenExtension;
    } else if (meterHoeveelheid > 0) {
        gesteldheidsMeterplant.src = meterAfbeeldingenPath + meterAfbeeldingen[4] + meterAfbeeldingenExtension;
    }

/* array aangemaakt en in de array zitten 5 waarden, deze waarden zijn bestandsnamen (afbeeldingen). variabele aangemaakt die de map locatie aangeeft. de volgende is de extensie van de afbeelding. variabele samengevoegd met de specifieke afbeelding ([]). met src kun je de afbeelding bron veranderen.*/

    if (meterHoeveelheid == 0) {
        afbeeldingLegepot.src = "./images/plantdor.png";
        gesteldheidsMeterplant.src = "./images/gezond0.png";

        clearInterval(interval);
        var dorrePlant = document.querySelector(".dorreplant");
        dorrePlant.classList.add("blockItem");
    }
}

var interval = setInterval(metertje, 1000);



/* Hulp gekregen van Tim bij het aftellen van de gesteldheidsmeter. Door middel van de meterHoeveelheid wordt bepaald welke afbeelding de meter aangeeft. De minder de gebruiker op de buttons klikt, de korter wordt de meter. Als je helemaal stopt met op de buttons klikken gaat de plant dood, dat is de clearinterval. De meter telt af naar nul. De blockitem staat in het css en zorgt ervoor dat deze wordt aangeroepen. */


function checkVariabele() {
    if (meterHoeveelheid >= 100) {
        meterHoeveelheid = 105;
    }
}



function herlaadPagina() {
    location.reload();
}

/* Bij deze functie kun je op de opnieuw proberen button klikken en wordt de pagina opnieuw geladen.*/

herhaal.addEventListener("click", herlaadPagina);

/* De click zorgt ervoor dat het event in gang wordt gezet als de gebruiker erop klikt. */


buttonEnter.addEventListener('click', naamVerzinnen);

/* Met deze addEventlistener wordt het intypen van de naam, gekoppeld aan de enter button op de pagina. De 'click' activeert de button.*/


geefZaadjesbutton.addEventListener('click', geefZaadjes);


/* De addEventlistener koppelt een event aan een specifiek element. De eerste parameter beschrijft het type event, de tweede is de functie die ik wil aanroepen als het event gebeurd. Opgeschreven uit lessen en van w3Schools.*/

geefWaterbutton.addEventListener('click', geefWater);



/* Bij deze addEventlistener wordt er water gegeven aan de plant. De afbeelding verschijnt dan op het scherm.*/


geefZonbutton.addEventListener('click', geefZon);



/*Hetzelfde geld voor deze addEventlistener maar dan met de zon.*/

geefLiefdebutton.addEventListener('click', geefLiefde);
