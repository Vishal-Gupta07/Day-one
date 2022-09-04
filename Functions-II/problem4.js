//Write a custom function that has the same behavior of inbuilt String Substring Function

let str = 'Mozilla';
//console.log(str.substring(2));

function substring(str, a, b) {
  let bag = "";
  //let a=2;

  if (a => 0 && !b) {
    for (i = a; i <= str.length - 1; i++) {
      bag = bag + str[i];
    }
  }

   if (a >= 0 && b >= 0 ) {
   // b = str.length - b;
    for (i = a; a < b; i++) {
      bag = bag + str[i];
    }
  }


  console.log(bag);
}

substring("Mozilla", 0, 3);
