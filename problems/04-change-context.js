function changeContext(func, obj) {
  let change = func.call(obj)

  return change;
}


class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
