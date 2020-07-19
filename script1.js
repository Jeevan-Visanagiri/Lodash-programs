var greet = (greeting, name) => greeting + ' ' + name;//arrow function
  
  var sayHelloTo = _.partial(greet, 'Hello');//LOdas partial 
  console.log( sayHelloTo('Jeevan'));