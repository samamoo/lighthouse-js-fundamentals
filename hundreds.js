const howManyHundreds = function (num) {
  let crate = Math.floor(num / 100);
  return crate;
}

//console.log(howManyHundreds(268));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);