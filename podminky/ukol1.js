/* Přijměte jméno jako vstup od uživatele, dále nechte zadat jeho věk a vypište na základě věku jednu ze dvou vět ve tvaru:
a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto. */

let jmeno = prompt('Jaké je tvoje jméno?');
let vek = prompt('Jaký je tvůj věk?');

if (vek >= 18) {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je Vám ' +
      vek +
      ', a tak máte právo řídit auto.'
  );
} else {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je Vám ' +
      vek +
      ' let, a tak musíte počkat ještě ' +
      (18 - vek) +
      ' let, než budete moci řídit auto.'
  );
}
