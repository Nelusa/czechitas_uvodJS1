/* Napište funkci, která vypíše součet, rozdíl, násobek a podíl 2 zadaných čísel, rozdíl zobrazujte jako absolutní hodnotu. */

let x = Number(prompt('Zadejte číslo 1: '));
let y = Number(prompt('Zadejte číslo 2: '));

function pocitani(x, y) {
  let soucet = x + y;
  let rozdil = Math.abs(x - y);
  let nasobek = x * y;
  let podil = Math.floor(x / y);

  console.log(soucet);
  console.log(rozdil);
  console.log(nasobek);
  console.log(podil);
}

pocitani(x, y);
