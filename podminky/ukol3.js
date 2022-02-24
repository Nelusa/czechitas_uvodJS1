/* Nechte uživatele zadat 3 čísla - strany trojúhelníku a zjistěte, zda jde trojúhelník sestrojit
- trojuhelnik jde sestrojit, pokud soucet 2 nejmensich stran je > nez treti strana
- principialne jde POUZE o podminku navic do prikladu 2...

Trojúhelník jde sestrojit, pokud součet 2 nejmenších stran je větší než strana třetí = je potřeba najít nejdelší stranu */

let strana1 = Number(prompt('Zadej první stranu (v cm): '));
let strana2 = Number(prompt('Zadej druhé stranu (v cm): '));
let strana3 = Number(prompt('Zadej třetí stranu (v cm): '));

if (strana1 > strana2) {
  if (strana1 > strana3) {
    console.log('Největší číslo je ' + strana1);
  } else {
    console.log('Největší číslo je ' + strana3);
  }
} else {
  if (strana2 > strana3) {
    console.log('Největší číslo je ' + strana2);
  } else {
    console.log('Největší číslo je ' + strana3);
  }
}
