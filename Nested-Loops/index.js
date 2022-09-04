//Problem 1: Print the Calendar date in the below format

for(let month=1; month<=12;month++){

  let day=31;
  if(month==2){
    day=28;
  }else if(
    month==4 || month == 6 || month == 9  || month == 11
  ){
    day=30;
  }
  for(let days=1;days<=day;days++){
    console.log(days+ "-"+month);
  }
}