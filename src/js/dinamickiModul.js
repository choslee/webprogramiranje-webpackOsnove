/* Standardno korišćenje za dinamički učitan modul */
let ispis = document.getElementById("ispis");
ispis.innerHTML = "Na ovoj stranici je sada učitan <strong> Dinamički </strong> modul!"




/* Prosledjivanje modula kroz promise System.import().then(module => conosle.log (module))*/
export default () => {
    console.log("Učitan je dinamički modul");
};