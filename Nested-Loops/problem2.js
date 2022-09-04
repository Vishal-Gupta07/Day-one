//Problem 2: Print Prime Numbers from 1 to given limit

for (let a = 5; a <= 20; a++) {

  let fectores = 0;

  for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
      fectores++;
    }
  }
  if (fectores == 2) {
    console.log(a, " is prime");
  } else {
    console.log(a, "is not prime");
  }
}