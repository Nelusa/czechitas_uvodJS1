/* Nechte uživatele zadat horní mez – číslo. Vypište všechny čísla od nuly do této horní meze VČETNĚ, které jsou sudá.
Vstup: 8 Výstup: 2, 4, 6, 8 */

let horni = Number(prompt('Zadejte horní mez: '));

for (let i = 0; i < horni; i = i + 2) {
  console.log(i);
}

/* for (let i = 0; i < horni; i++ {
  if (i % 2) {
????
  }
}) */
