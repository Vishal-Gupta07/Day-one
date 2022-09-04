//Problem 4: Write a function to check if the char is a small case or not.

function check_lower(cher){

let lower_case="abcdefghijklmnopqrstuvwxyz"

for(let i=0;i<=lower_case.length-1;i++){
  if(lower_case[i]==cher){
   return true;
  }
}
}

let step= check_lower("N");

if(step==true){
  console.log("Yes");
}else{
  console.log("No");
}

