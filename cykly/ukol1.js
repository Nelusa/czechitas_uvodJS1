/*Zadání:
• Žádej si od uživatele zadávat číslo TAK DLOUHO, dokud ti
nezadá číslo odlišné od 0.
• Pokud ti zadá 0, vypiš mu, že musí zadat číslo odlišné od
0.
• Po úspěšném zadání čísla, číslo vypiš. */

let cislo = prompt('Zadejte číslo: ');
while (cislo == 0) {
  console.log('Zadej číslo odlišné od nuly');
  cislo = prompt('Zadej číslo: ');
}

console.log(cislo);
