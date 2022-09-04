
let num = 3;

let count = 1;



for (i = 1; i <= num; i++) {

  let bag = "";

  for (a = 1; a <= num; a++) {
    bag = bag + count++ + " ";
  }
  console.log(bag);

}
