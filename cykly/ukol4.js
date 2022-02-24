/* Nechte uživatele zadat 2 čísla, které značí dolní a horní mez na číselné ose celých čísel – včetně.
Pokud tedy zadá 3 a 7, uvažujme čísla 3, 4, 5, 6, 7.
Vypište pomocí FOR */

let dolni = Number(prompt('Zadejte dolní mez: '));
let horni = Number(prompt('Zadejte horní mez: '));

for (let i = dolni; i <= horni; i++) {
  console.log(i);
}
