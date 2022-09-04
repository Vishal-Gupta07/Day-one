//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

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

  for (let j = 2; j <= 10; j++) {
    let step = check_num(j);
    if (step == false) {
      console.log(j, "Non-Prime");
    }
  }