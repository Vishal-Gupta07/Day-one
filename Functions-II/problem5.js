// Write a custom function that has the same behavior of inbuilt Array Includes Function

// let arr=[1,2,3];
// let bag=5;

function includes(arr,bag){
for(i=0;i<=arr.length-1;i++){
  if(bag==arr[i]){
    return true;
  
  }
}
  return false;
}

let result=includes([1,2,3],5);

console.log(result);

