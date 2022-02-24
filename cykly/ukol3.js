/* Rozšiř předešlý úkol tak, že nebude vypisovat pouze součet, ale rozepíše celou rovnici, jak k němu přišel: */

/* Je potřeba poprvé načíst číslo, ??? */
let cislo = Number(prompt('Zadej číslo: '));

let soucet = 0;


// prompt
while (true) {
  if (cislo === 0) {
    break;
  }
  soucet = soucet + cislo;
  console.log('Součet je: ' + soucet);
  //prompt
  cislo = Number(prompt('Zadej číslo: '));
}