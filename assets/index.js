class MyArray {
  constructor() {
    this.length = 0;
  }

  push(...elems) {
    // добавить элементы в конец массива
    for (let i = 0; i < elems.length; i++) {
      this[this.length++] = elems[i];
    }
    //  возвращает новую длину массива
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const deletedValue = this[this.length - 1];
    delete this[--this.length];
    return deletedValue;
  }

  concat(...items) {
    // создать новый массив
    const newArray = new MyArray();
    // заполнить новый массив элементами из старого
    for (let i = 0; i < this.length; i++) {
      // newArray[newArray.length++] = this[i];
      newArray.push(this[i]);
    }
    // положить все аргументы которые нам дали
    for (let i = 0; i < items.length; i++) {
      // проверить, является ли элемент экземпляром MyArray
      if (MyArray.isMyArray(items[i])) {
        // если да то мы по циклу запихиваем содержание этого MyArray
        for (let j = 0; j < items[i].length; j++) {
          newArray.push(items[i][j]);
        }
      } else {
        // если нет то просто его ложим
        newArray.push(items[i]);
      }
    }
    // вернуть новый массив
    return newArray;
  }

  [Symbol.iterator]() {
    const context = this; // конкрентный массив
    let i = 0; // текущий индекс

    return {
      next() {
        return {
          done: i >= context.length, // проверка закончили мі обход или нет
          value: context[i++], // текущее значение
        };
      },
    };
  }

  static isMyArray(obj) {
    return obj instanceof MyArray;
  }

  // Добавить к имеющимуся классу MyArray следующие методы, имитирующие поведения реальных методов массива:

  unshift(...elems) {
    //здвинути існуючі елементи масиву(використати конкат?)

    for (let i = this.length + elems.length; i > elems.length; i--) {
      this[i] = this[i - elems.length];
    }

    //додати нові елементи в початок масиву

    for (let i = 0; i < elems.length; i++) {
      this[i] = elems[i];
    }

    //повернути нову довжину масиву
    return this.length + elems.length;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    //як звернутися до першого елементу?
    const deletedValue = this[this.elems[0]];
    delete this[this.elems[0]];
    return deletedValue;

    //здвину всі інші елементи масиву на один вверх
  }
}

const myArr = new MyArray();
myArr.push(10, 20, 30);
const myArr1 = new MyArray();
myArr1.push(10000, 20000);
const myArr2 = myArr.concat(null, 40, 50, 60, myArr1);

const arr = [1, 2];
const arr2 = arr.concat(50, 60, true, ["test", undefined, null]);
arr.unshift(10);

// for (const item of myArr) {
//   console.log("myArr");
//   console.log(item);
//   console.log("myArr");
// }
