//Problem 3 : Given an array of string count the overall total number of characters

let arr=["ravi","kamal","lucky","rohit"];

let total=0;

for(j=0;j<=arr.length-1;j++){
  total=total+arr[j].length;
}
console.log(total);