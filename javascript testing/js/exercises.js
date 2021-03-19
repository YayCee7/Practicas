// COFLA EP1 //

let dineroCofla = prompt("¿De cuanto dinero dispones para comprar, Cofla?");
let dineroRoberto = prompt("¿De cuanto dinero dispones para comprar, Roberto?");
let dineroPedro = prompt("¿De cuanto dinero dispones para comprar, Pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado citrico");
    alert("y te sobran" + (dineroCofla - 1));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado cremoso");
    alert("y te sobran" + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.8) {
    alert("Cofla, comprate el helado Magnum");
    alert("y te sobran" + (dineroCofla - 1.8));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado Tody");
    alert("y te sobran" + (dineroCofla - 2.9));
} else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helado Napolitano");
    alert("y te sobran" + (dineroCofla - 2.9));
} else {
    alert("Lo siento Cofla pero no te puedes comprar nada, andate a la concha de la lora")
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, comprate el helado citrico");
    alert("y te sobran" + (dineroRoberto - 1));
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado cremoso");
    alert("y te sobran" + (dineroRoberto - 1.6));
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.8) {
    alert("Roberto, comprate el helado Magnum");
    alert("y te sobran" + (dineroRoberto - 1.8));
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado Tody");
    alert("y te sobran" + (dineroRoberto - 2.9));
} else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado Napolitano");
    alert("y te sobran" + (dineroRoberto - 2.9));
} else {
    alert("Lo siento Roberto pero no te puedes comprar nada, andate a la concha de la lora")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado citrico");
    alert("y te sobran" + (dineroPedro - 1));
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado cremoso");
    alert("y te sobran" + (dineroPedro - 1.6));
} else if (dineroPedro >= 1.6 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado Magnum");
    alert("y te sobran" + (dineroPedro - 1.8));
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado Tody");
    alert("y te sobran" + (dineroPedro - 2.9));
} else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado Napolitano");
    alert("y te sobran" + (dineroPedro - 2.9));
} else {
    alert("Lo siento Pedro pero no te puedes comprar nada, andate a la concha de la lora")
}