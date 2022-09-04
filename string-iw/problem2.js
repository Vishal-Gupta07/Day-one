//Problem 2 : Given a string in lower case convert it to upper case

let name = "kamal";

let bag = "";

let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(i=0;i<=name.length-1;i++){
  for(j=0;j<=lower.length-1;j++){
    if(name[i]==lower[j]){
      bag=bag+upper[j];
      break;
    }
  }
}
console.log(bag);