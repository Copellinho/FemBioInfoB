const BtnDivFemDestaque = document.getElementById("BtnDivFemDestaque");
const BtnCard = document.getElementById("BtnCard");
const BtnCard2 = document.getElementById("BtnCard2");
const BtnCard3 = document.getElementById("BtnCard3");

const BtnFechar = document.getElementById("BtnFechar");
const BtnFechar2 = document.getElementById("BtnFechar2");
const BtnFechar3 = document.getElementById("BtnFechar3");

const dialog = document.getElementById("dialog");
const dialog2 = document.getElementById("dialog2");
const dialog3 = document.getElementById("dialog3");


if (BtnDivFemDestaque) {
    BtnDivFemDestaque.onclick = () => {
        window.location.href = "./pages/Adabio/Adabio.html";
    };
}

// Controle dos Modais (Dialogs)
if (BtnCard && dialog) {
    BtnCard.onclick = () => dialog.showModal();
}
if (BtnFechar && dialog) {
    BtnFechar.onclick = () => dialog.close();
}

if (BtnCard2 && dialog2) {
    BtnCard2.onclick = () => dialog2.showModal();
}
if (BtnFechar2 && dialog2) {
    BtnFechar2.onclick = () => dialog2.close();
}

if (BtnCard3 && dialog3) {
    BtnCard3.onclick = () => dialog3.showModal();
}
if (BtnFechar3 && dialog3) {
    BtnFechar3.onclick = () => dialog3.close();
}

// Restauração de scroll na página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});