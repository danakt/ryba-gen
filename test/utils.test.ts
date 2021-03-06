import { expect }                                from 'chai'
import { randomBoolean, getRandomItemFromArray } from '../src/utils'

/**
 * Получение случайного логическго значения
 * @function randomBoolean
 */
describe('Получение случайного логическго значения', () => {
  it('Проверка типа', () => {
    expect(typeof randomBoolean()).to.eq('boolean')
  })

  it('Проверка энтропии', () => {
    const iterationNumber = 1e5

    const result: any = {
      true:  0,
      false: 0
    }

    for (let i = 0; i < iterationNumber; i++) {
      result[randomBoolean().toString()]++
    }

    expect(result.true).to.gt(iterationNumber * 0.4)
    expect(result.false).to.gt(iterationNumber * 0.4)
  })
})

/**
 * Получение случайного значения из массива
 * @function getRandomItemFromArray
 */
describe('Получение случайного значения из массива', () => {
  it('Наличие значения в массиве', () => {
    const arr: any[] = [1, true, '123', {}]

    // Пробуем 100 итераций
    for (let i = 0; i < 1e3; i++) {
      expect(arr.indexOf(getRandomItemFromArray(arr))).to.not.eq(-1)
    }
  })
})
