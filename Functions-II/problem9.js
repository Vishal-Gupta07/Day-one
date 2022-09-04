let obj={
  name: "vishal",
  age:25,
  location:"delhi",
  print: function(){
    console.log("My name is",this.name)
    console.log("My name is",this.age)
    console.log("My name is",this.location)
  }
}

obj["print"]();