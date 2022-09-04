//Given an array find the unique items in the array

let arr=[1,2,3,4,3,2,1];
let obj ={};

for(let i=0;i<=arr.length-1;i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]]=1;
  }else{
    obj[arr[i]]++;
  }
}

for(let key in obj){
  if(obj[key]==1){
    console.log(key);
  }
}