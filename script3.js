const say = (what, ...names) => {
  const [last, ...initial] = names.reverse();
  const finalSeparator = (names.length > 1 ? ', &' : '');
  return `${what} ${initial.join(', ')} ${finalSeparator} ${last}`;
};

  console.log(say('hello', 'fred', 'barney', 'pebbles'));