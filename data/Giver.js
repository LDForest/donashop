class Giver {
  constructor(data = {}) {
    this.data = data;
  }

  /**
   * iNeed - Общая функция для получения айтемов
   *
   * @param  {string} field Которое поле требуется
   * @param  {string|number} [method] Метод которым нужно получить данные
   * @param  {number} [amount=1] Какое количество
   * @param  {number} [from] С какого количества
   * @return {Array}
   */
  iNeed(field, method = 'stretch', amount = 1, from = 0) {
    const arrayField = this.data[field];
    let met = method;
    let am = amount;

    if (typeof met === 'number') {
      am = met;
      met = 'stretch';
    }

    if (met === 'random') {
      const selectionArr = this.random(arrayField, am);
      return this.markArray(selectionArr, field);
    }

    if (met === 'stretch') {
      const selectionArr = this.stretch(arrayField, from, am);
      return this.markArray(selectionArr, field);
    }

    if (met === 'stretchRecursive') {
      const selectionArr = this.stretchRecursive(arrayField, from, am);
      return this.markArray(selectionArr, field);
    }

    return this.data[field];
  }

  markArray(arr, field){
    return arr.map((item) => {
      item.ctg = field;
      return item;
    });
  }

  /**
   * stretch - Отрезать массив "Напрямую"
   *
   * @param  {Array} arr Исходный массив
   * @param  {number} from С какого элемента
   * @param  {number} amount Какое количество
   * @return {Array}
   */
  stretch(arr, from, amount) {
    return arr.slice(from, from + amount);
  }

  /**
   * stretchRecursive - Сформировать массив с конкретного элемента
   * в "Рекурсивном" стиле, т.е. если длина массива меньше запрашиваемого value
   * то возвращаться будут айтемы сначала
   *
   * @param  {number} from С какого элемента
   * @param  {number} amount Какое количество требуется
   * @return {Array}
   */
  stretchRecursive(arr, from, amount) {
    const itemsLength = arr.length;
    const haveFrom = itemsLength - from;


    if (haveFrom < amount) {
      let diffFrom = amount - haveFrom;
      let result = [];
      result = result.concat(this.stretch(arr, from, haveFrom));
      while (diffFrom > itemsLength) {
        result = result.concat(this.stretch(arr, 0, itemsLength));
        diffFrom -= itemsLength;
      }
      result = result.concat(this.stretch(arr, 0, diffFrom));
      return result;
    }

    return arr.slice(from, from + amount);
  }


  /**
   * random - Получить рандомные айтемы
   *
   * @param  {number} [amount=1] Нужное количество рандомных айтемов
   * @return {Array}
   */
  random(arr, amount = 1) {
    let items = [];
    for (let i = 0; i < amount; i += 1) {
      const randomNum = parseInt(Math.random() * arr.length, 10);
      items = items.concat(arr[randomNum]);
    }
    return items;
  }
}

module.exports = Giver;
