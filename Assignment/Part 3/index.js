function createGreeting(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    };
  }
  
  const sayHello = createGreeting("Hello");
  console.log(sayHello("World")); // Hello, World!
  
  const sayWelcome = createGreeting("Welcome");
  console.log(sayWelcome("Prashanth")); // Welcome, Prashanth!