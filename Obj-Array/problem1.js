
let arr=[2,2,2,7,9]

let obj={}
    
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]==undefined){
            obj=obj+arr[i]+1
        }else{
          obj=obj+arr[i]+1;
        }
    }

  console.log(obj)

    // let bag=""
    // for(key in obj){
    //     bag=bag+key+" ";
    // }
    // console.log(bag);