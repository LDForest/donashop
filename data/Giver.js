class Giver {
  constructor(items = []) {
    this.items = items;
  }

  /**
   * iNeed - Общая функция для получения айтемов
   *
   * @param  {string} method Метод которым нужно получить данные
   * @param  {number} [amount=1] Какое количество
   * @param  {number} [from] С какого количества
   * @return {Array}
   */
  iNeed(method, amount = 1, from = 0) {
    if (method === 'random') {
      return this.random(amount);
    }

    if (method === 'stretch') {
      return this.stretch(from, amount);
    }

    if (method === 'stretchRecursive') {
      return this.stretchRecursive(from, amount);
    }

    return this.items;
  }

  /**
   * stretch - Отрезать массив "Напрямую"
   *
   * @param  {number} from С какого элемента
   * @param  {number} amount Какое количество
   * @return {Array}
   */
  stretch(from, amount) {
    return this.items.slice(from, from + amount);
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
  stretchRecursive(from, amount) {
    const itemsLength = this.items.length;
    const haveFrom = itemsLength - from;

    if (haveFrom < amount) {
      let diffFrom = amount - haveFrom;
      let result = [];
      result = result.concat(this.stretch(from, haveFrom));
      diffFrom -= haveFrom;
      while (diffFrom > itemsLength) {
        result = result.concat(this.stretch(0, itemsLength));
        diffFrom -= itemsLength;
      }
      result = result.concat(this.stretch(0, diffFrom));
      return result;
    }

    return this.items.slice(from, from + amount);
  }


  /**
   * random - Получить рандомные айтемы
   *
   * @param  {number} [amount=1] Нужное количество рандомных айтемов
   * @return {Array}
   */
  random(amount = 1) {
    let items = [];
    for (let i = 0; i < amount; i += 1) {
      const randomNum = parseInt(Math.random() * this.items.length, 10);
      items = items.concat(this.items[randomNum]);
    }
    return items;
  }
}

module.exports = Giver;
