
//let str="abcdefghijklmnopqrstuvwxyz";
let N=30;
let str="abceefghijklmnopqrstuvwxyz"
let M=3;
let obj={};

for(i=0;i<=str.length;i++){
  if(obj[str[i]]==undefined){
    obj[str[i]]=1;
  }else{
    obj[str[i]]+N;
  }
}

let sum=0;
for(let key in obj){
  if(obj[key]==M){
    sum=sum+number(key);
  }
}
console.log(sum);