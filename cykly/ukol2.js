/* Čti od uživatele čísla tak dlouho, dokud nezadá 0 a vždy vypiš NAAKUMULOVANÝ součet těchto čísel
Vstup: 2
Součet: 2
Vstup: 4
Součet: 6
Vstup: 11
Součet: 17
Vstup: 0
Finální součet: 17 */

// soucet
let soucet = 0;
let cislo = Number(prompt('Zadej číslo: '));
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
