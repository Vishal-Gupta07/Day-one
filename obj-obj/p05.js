

let str=[1,2,3,4,2,3,5];

let obj={}


for(i=0;i<=str.length-1;i++){
  let char=str[i];
  if(obj[char]==undefined){

    obj[char]=1;
  }else{
    obj[char]++
  }
}

//console.log(obj)

let max =  -Infinity
let sum=0;

let bag=""
for(key in obj){
  if(obj[key]==2){
    bag=bag+key+": "+obj[key]+", "
    // sum=sum+obj[key]
    // bag=bag+key+" ";
  }
}

//console.log(sum)
console.log(bag)