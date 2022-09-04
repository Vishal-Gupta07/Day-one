
let str="vishal";

let obj={};

let lower="abcdefghijklmnpoqrstuvwxyz";

for(i=0;i<=lower.length-1;i++){
  let char=lower[i];
  if(obj[char]==undefined){
    obj[char]=i+1;
  }
}

//console.log(obj)

let sum=0;

for(key in obj){
  for(i=0;i<=str.length-1;i++){
    if(str[i]==key){
      sum=sum+obj[key]
    }
  }
}

console.log(sum);