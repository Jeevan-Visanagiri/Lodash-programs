//rest and spread
var say = _.rest(function(what, names) {
    var last = _.last(names);
    var initial = _.initial(names);
    var finalSeparator = (_.size(names) > 1 ? ', & ' : '');
    return what + ' ' + initial.join(', ') +
      finalSeparator + _.last(names);
  });
  
  console.log(say('hello', 'fred', 'barney', 'pebbles'));