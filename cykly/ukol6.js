/* Přepište tento for cyklus pomocí While cyklu
for (let i = 12, j = 12 ** 3; i < 12 + j; i = i * 2) { console.log(i);
} */

let i = 12;
j = 12 ** 3;
while (i < 12 + j) {
  i = i * 2;
  console.log(i);
}
