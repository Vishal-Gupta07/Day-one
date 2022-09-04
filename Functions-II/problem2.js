// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function




arr=['Dodo', 'Tiger', 'Penguin', 'Dodo'];

check="Dodo";


function checklastIndex(arr,check){

for(i=arr.length-1;i>=0;i--){
  if(arr[i]==check){
    return i;
  }
}
  //return -1;
}

console.log(checklastIndex(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Tiger"));