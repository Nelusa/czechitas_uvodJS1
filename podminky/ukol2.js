/* Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu
"Největší číslo je A: 37". 

Zkuste si zadání rozebrat na jednoduché kroky – například nejdříve porovnání 2 čísel a pak pokračovat dále...*/

let number1 = Number(prompt('Zadej první číslo: '));
let number2 = Number(prompt('Zadej druhé číslo: '));
let number3 = Number(prompt('Zadej třetí číslo: '));

if (number1 > number2) {
  if (number1 > number3) {
    console.log('Největší číslo je ' + number1);
  } else {
    console.log('Největší číslo je ' + number3);
  }
} else {
  if (number2 > number3) {
    console.log('Největší číslo je ' + number2);
  } else {
    console.log('Největší číslo je ' + number3);
  }
}
