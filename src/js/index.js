/* global System */
import '../scss/main.scss';
import {stampajProbu} from './nekiModul';


/* Testiranje importa funkcije iz drugog modula (nekiModul.js) */
stampajProbu();

/* Dinamičiki import modula */
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("ucitaj-btn");

    btn.addEventListener("click", ucitajModul, false);

    function ucitajModul() {
        System.import("./dinamickiModul")
            .then(module => console.log(module))
            .catch(error => {
                console.log("Imamo problema sa učitavanjem prosledjenog modula kroz Promise", error);
            });
    }
}, false);



