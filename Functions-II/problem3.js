// Write a custom function that has the same behavior of inbuilt Array Slice Function

function slice(arr,a,b){
let arr2=[]

  if(a>0&&!b){
  for(i=a;i<=arr.length-1;i++){
    arr2.push(arr[i]);
  }
  }
  
  if(a>0&&b>0){
    for(i=a;i<b;i++){
    arr2.push(arr[i]);
  }
  }

  if(a<0&&!b){
    a=arr.length+a;
    for(i=a;i<=arr.length-1;i++){
    arr2.push(arr[i]);
  }
  }

  if(a>0&&b<0){
    b=arr.length+b;
    for(i=a;i<b;i++){
    arr2.push(arr[i]);
  }
  }

  if(!a&&!b){
    for(i=0;i<=arr.length-1;i++){
    arr2.push(arr[i]);
  }
  }
  
console.log(arr2);

}

slice(['ant', 'bison', 'camel', 'duck', 'elephant'],)
