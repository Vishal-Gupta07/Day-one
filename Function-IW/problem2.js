//Problem 2: Use the above function to print the Primes from 2 to a given limit


function check_num(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

  for (let i = 2; i <= 10; i++) {
    let x = check_num(i);
    if (x == true) {
      console.log(i, "Prime");
    }
  }


//check_num(17);