let n = 170;

    let sum = 0;
    let sum1 = 0;
    let sum2 = 0;
    let fix =80;
    for(a=1;a<=n;a++){
        if(a>=20){
            sum2=20;
        }else{
            sum2=0;
        }
    }
    
    for(let j=1;j<=n;j++){
        if(j>=100){
            sum1 =100;
        }else{
            sum1=0;
        }
    }
    for(i=1;i<=n;i++){
        if(i>=50){
            sum = 50;
        }else{
            sum=0;
        }
    }
    
    let result = sum+sum1+sum2;
    console.log(result);

// let sum = 0;
// let sum1 = 0;
// let sum2 = 0;
// let fix = 80;

// if(n>=50){
//   sum=50;
// }
// if(n>=100){
//   sum1=100;
// }
// if(n>=20){
//   sum2=20;
// }

// let result=sum+sum1+sum2;
// console.log(result);



// if(n>=50){
//   sum=50*3;
// }
// if(n>=100){
//   sum1=100*5;
// }
// if(n>=20){
//   sum2=20*10;
// }

// let result=sum+sum1+sum2+fix;
// console.log(result);