//Problem 1: Create a function to check if a number is Prime or Not



function check_num(num){
  let count=0;
  
  for(let i=1;i<=num;i++){
    if(num%i==0){
      count++
    }
  }
  
  if(count==2){
    console.log(num,"prime number");
  }else{
    console.log(num,"not prime number");
  }
}

check_num(17);