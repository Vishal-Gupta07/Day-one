/*
Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included)  */
let count=0;
function isOdd(N)
  {
    for(let i=0;i<=N;i++)
      {
        if(N%2!=0)
        {
          count++
        }
       
      } 
    if(count>0)
      console.log("true");
    else
      console.log("false");
  }
isOdd(5);