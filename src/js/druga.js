import '../scss/main.scss';
import malaSlika from  "../../assets/mala-slika.jpg";
import velikaSlika from  "../../assets/velika-slika.jpg";


/* Deo vezan za image-loade*/
const mala = document.createElement('img');
mala.src = malaSlika;
document.body.appendChild(mala);

const velika = document.createElement('img');
velika.src = velikaSlika;
document.body.appendChild(velika);

/* Testiranje rada */
console.log("Ovo je štampano iz modula namenjenoj drugoj stranici a naziv modula je ''");