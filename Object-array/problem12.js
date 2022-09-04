// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average



let aver=0;
let sum=0;

function averageArr(arr){

  for(i=0;i<=arr.length-1;i++){
    sum=sum+arr[i];
    aver++
}

let result=sum/aver;
console.log(result);
}

averageArr([1,2,3,4,5,6]);

