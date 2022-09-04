// /Problem 5: Write a function to replace spaces in a given string with - .

function check_spaces(name) {
//let name="hello everyone";

  let bag = "";

  for (let i = 0; i <= name.length - 1; i++) {
    if (name[i] == " ") {
      bag = bag + "-";
    } else {
      bag = bag + name[i];
    }
  }
  console.log(bag);
}
check_spaces("hello everyone");