
let sum=0;
let product=1;

for(i=1;i<=50;i++){
  if(i%2==0){
    sum=sum+i;
  }else{
    product=product*i;
  }
}

console.log(sum);
console.log(product);



// let sum=0;
// let count=0;
// for(let i=1;i<=20;i++){
//   if(i%2==0){
//     sum=sum+i;
//     count++;
//   }
// }
// console.log(sum/count);

let bag="";
for(i=1;i<=5;i++){
  bag=bag+"*"+" ";
  console.log(bag);
}
