
let N=30;
let K=56;

let str="abcdefghijklmnopqrstuvwxyz";
    let obj={};
    let sum=0;
    for(i=0;i<=str.length-1;i++){
        obj[str[i]]=i+N;
      sum=sum+N;
    }
    
    for(key in obj){
        console.log(key+"-"+obj[key]);
    }