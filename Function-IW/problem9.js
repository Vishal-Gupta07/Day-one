let str="naman"

let bag="",
  
  for(let i=str.length;i>=0;i--){
      bag=bag+str[i];
  }
    
  if(bag==str){
     console.log("Yes");
  }else{
      console.log("No");
  }




// let N=5;

// let str=[4,5,7];

// let count=0;

// for(i=0;i<N;i++){
//   bag="";
//   for(j=i;j<N;j++){
//     bag=bag+str[j]
//     if(bag[0]==bag[bag.length-1]){
//       count++
//     }
//   }
// }

// console.log(count)