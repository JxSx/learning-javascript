
/**
 * 装饰器只能用于类、类的属性、类的方法，不能用于函数，因为存在函数提升。
 */

/**
 * 装饰类
 * @param {*} target 类本身
 */
function classDecorator(target) {
  // 添加静态属性
  target.COUNTRY = "china";
  // 添加实例属性
  target.prototype.age = 28;
}
@classDecorator
class Person {

}

function animalDecorator(type) {
  return function (target) {
    target.TYPE = type;
  }
}

@animalDecorator('dog')
class Animal {

}
let p = new Person();
console.log(Person.COUNTRY)
console.log(p.age)
console.log(Animal.TYPE)

/**
 * 装饰类的属性和方法
 * @param {*} target 类的原型对象，注意和装饰类的时候不同
 * @param {*} key 
 * @param {*} descriptor 
 */
function deprecated(target, key, descriptor) {
  if (typeof descriptor.value !== 'function') {
    throw new SyntaxError('Only functions can be marked as deprecated');
  }

  return {
    ...descriptor,
    value: function () {
      console.warn(`DEPRECATION ${target.constructor.name}#${key}`);
      return descriptor.value.apply(this, arguments);
    }
  }
}

function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Calc {
  @readonly
  value = 123;

  @deprecated
  sum(a, b) {
    return a + b;
  }
}
let calc = new Calc();
console.log(calc.sum(2, 3))
// calc.value = 456; // TypeError: Cannot assign to read only property 'value' of object '#<Calc>'
console.log(calc.value);