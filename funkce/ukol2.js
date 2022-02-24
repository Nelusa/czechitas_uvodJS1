/* Napište funkci, který vypíše informaci, zda zadané číslo je nebo není prvočíslo.
- prvočíslo - dělitelné pouze 1 a samo sebou - zbytek po dělení: % - modulo
- v první moment pčedpokládejme, ze číslo JE prvočíslo a budeme případně rozporovat toto tvrzeni. */

function jePrvocislo(cislo) {
  let jePrvocislo = true;

  for (let i = 2; i < cislo; i++) {
    if (cislo % i == 0) {
      jePrvocislo = false;
      break;
    }
  }
  return jePrvocislo;
}

let cislo = Number(
  prompt('Zadejte číslo, abychom zjistili, zda je to prvočíslo: ')
);
if (jePrvocislo(cislo)) {
  console.log('Ano, toto číslo je prvočíslo');
} else {
  console.log('Ne, číslo není prvočíslo');
}
