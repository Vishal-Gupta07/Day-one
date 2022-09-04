//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join

function jointype(join){
  
let arr=["kamal","ankit","vishu"];

let bag="";
for(i=0;i<=arr.length-1;i++){

  if(i==arr.length-1){
    bag=bag+arr[i];
  }else{
    bag=bag+arr[i]+join;
  }
  
}
console.log(bag);
}

jointype("-")













// let elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join("-"));