const fun = {
    name: "Prashanth",
    sayHello: function() {
      setTimeout(() => {
        console.log(`Hi, I'm ${this.name}`);
      }, 1000);
    }
  };
  
  fun.sayHello();