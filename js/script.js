/* Hieronder staan de variabelen voor dit script. Een variabele is een stuk data in het geheugen van je computer. Met de juiste naam kun je bij die data en het gebruiken voor js.*/

var naamVanplant = document.querySelector('#naam');
var buttonEnter = document.querySelector('#buttonEnter');
var geefZaadjesbutton = document.querySelector('#zaadjes');
var pot = document.querySelector("#legepot");
var geefWaterbutton = document.querySelector('#water');
var geefZonbutton = document.querySelector('#zon');
var geefLiefdebutton = document.querySelector('#liefde');
var interval = setInterval(metertje, 1000);
/* Tim heeft mij geholpen bij het opzetten van de meter. Er wordt hier in principe elke keer een stap van de meter afgehaald door middel van een timer van 5sec.*/
var meterHoeveelheid = 100;
var gesteldheid = document.querySelector(".gesteldheid");
var dorrePlant = document.getElementById('dorreplant');
var gezondheidsbalk = document.querySelector(".gezondheidsbalk span");
var herhaal = document.getElementById("herhaalgame");

function naamVerzinnen() {
    var naamPlant = naamVanplant.value;
    waterme.textContent = naamPlant;
}

/* Ik heb hierboven een functie aangeroepen zodat de gebruiker de naam van zijn plant in kan typen. Functie wordt alleen aangeroepen als het script er om gevraagd heeft. */

buttonEnter.addEventListener('click', naamVerzinnen);

/* Met deze addEventlistener wordt het intypen van de naam, gekoppeld aan de enter button op de pagina. De 'click' activeert de button.*/


geefZaadjesbutton.addEventListener('click', geefZaadjes);

function geefZaadjes() {
    meterHoeveelheid += 10;
    checkVariabele();
    pot.src = './images/geeftzaadjes.png';
}

/* De addEventlistener koppelt een event aan een specifiek element. De eerste parameter beschrijft het type event, de tweede is de functie die ik wil aanroepen als het event gebeurd. Opgeschreven uit lessen en van w3Schools.*/

geefWaterbutton.addEventListener('click', geefWater);

function geefWater() {
    meterHoeveelheid += 10;
    checkVariabele();
    pot.src = './images/geeftwater.png';
}

/* Bij deze addEventlistener wordt er water gegeven aan de plant. De afbeelding verschijnt dan op het scherm.*/


geefZonbutton.addEventListener('click', geefZon);

function geefZon() {
    meterHoeveelheid += 10;
    checkVariabele();
    pot.src = './images/zon.png';
}

/*Hetzelfde geld voor deze addEventlistener maar dan met de zon.*/

geefLiefdebutton.addEventListener('click', geefLiefde);

function geefLiefde() {
    meterHoeveelheid += 10;
    checkVariabele();
    pot.src = './images/liefde.png';
}

/* Bij de checkVariabele hulp gekregen van Rowin (klasgenoot) voor een verhoging bij een klik op de knop. Als hierop is geklikt krijgt de gebruiker een bevestiging door de meter en een andere afbeelding.*/

function metertje() {
    meterHoeveelheid -= 5;
    gezondheidsbalk.textContent = meterHoeveelheid;
    plantDood();
}

function plantDood() {
    if (meterHoeveelheid > 80) {
        gesteldheid.src = "./images/gezond10.png";
    } else if (meterHoeveelheid > 60) {
        gesteldheid.src = "./images/gezond8.png";
    } else if (meterHoeveelheid > 40) {
        gesteldheid.src = "./images/gezond6.png";
    } else if (meterHoeveelheid > 20) {
        gesteldheid.src = "./images/gezond4.png";
    } else if (meterHoeveelheid > 0) {
        gesteldheid.src = "./images/gezond2.png";
    }

    if (meterHoeveelheid == 0) {
        pot.src = "./images/plantdor.png";
        gesteldheid.src = "./images/gezond0.png";

        clearInterval;
        var dorrePlant = document.querySelector(".dorreplant");
        dorrePlant.classList.add("blockItem");
    }
}

/* Hulp gekregen van Tim (klasgenoot) bij het aftellen van de gesteldheidsmeter. Door middel van de meterHoeveelheid wordt bepaald welke afbeelding de meter aangeeft. De minder de gebruiker op de buttons klikt, de korter wordt de meter. Als je helemaal stopt met op de buttons klikken gaat de plant dood, dat is de clearinterval. De meter telt af naar nul. De blockitem staat in het css en zorgt ervoor dat deze wordt aangeroepen. */


function checkVariabele() {
    if (meterHoeveelheid >= 100) {
        meterHoeveelheid = 105;
    }
}
/* Bij deze checkVa. met Rowin gekeken naar de dubbelcheck voor de functies. */


function herlaadPagina() {
    location.reload();
}

/* Bij deze functie kun je op de opnieuw proberen button klikken en wordt de pagina opnieuw geladen.*/

herhaal.addEventListener("click", herlaadPagina);

/* De click zorgt ervoor dat het event in gang wordt gezet als de gebruiker erop klikt. */
