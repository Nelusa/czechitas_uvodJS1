let jmeno = prompt('Jaké je tvoje jméno?');
let vek = prompt('Jaký je tvůj věk?');

if (vek >= 18) {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ' ,je Vám ' +
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
