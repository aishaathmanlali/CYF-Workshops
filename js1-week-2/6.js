function printTimesTables(n) {
  let i = 1;
  let timesTable = "";
  while (i <= 12) {
    const product = n * i;
    timesTable = timesTable + `${n} * ${i} = ${product}` + "\n";
    i++;
  }
  return timesTable;
}

console.log(printTimesTables(45));
