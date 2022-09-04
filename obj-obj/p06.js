

let arr=[1,2,3,4,5,6,48,5,9,75,65,3,15,4,5,2];


let obj={}

for(i=0;i<=arr.length-1;i++){
  let char = arr[i];
  if(obj[char]==undefined){
    obj[char]=1;
  }else{
    obj[char]++
  }
}

console.log(obj)

let newarr=[];

for(key in obj){
  newarr.push(+key);
}

console.log(newarr);