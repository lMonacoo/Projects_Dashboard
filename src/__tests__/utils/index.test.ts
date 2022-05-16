import { getPropertyInArray, debounceFunction, findBiggerNumberInArray } from '../../utils';

describe('utils', () => {
  describe('debounceFunction', () => {
    it('should call the callback after the specified time', () => {
      // arrange
      jest.useFakeTimers();
      const callback = jest.fn();
      const wait = 100;

      // act
      debounceFunction(callback, wait);

      // assert
      jest.advanceTimersByTime(wait);
      expect(callback).toHaveBeenCalled();
    });

    it('should call the callback only one time after the specified time', () => {
      // arrange
      jest.useFakeTimers();
      const callback = jest.fn();
      const wait = 100;

      // act
      debounceFunction(callback, wait);
      debounceFunction(callback, wait);
      debounceFunction(callback, wait);

      // assert
      jest.advanceTimersByTime(wait);
      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should not call the callback instantly', () => {
      // arrange
      jest.useFakeTimers();
      const callback = jest.fn();
      const wait = 100;

      // act
      debounceFunction(callback, wait);

      // assert
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('findBiggerNumberInArray', () => {
    it('should return the bigger number in the array', () => {
      // arrange
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      // act
      const biggerNumber = findBiggerNumberInArray(array);

      // assert
      expect(biggerNumber).toBe(10);
    });

    it('should return the bigger number in the array independing the order', () => {
      // arrange
      const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

      // act
      const biggerNumber = findBiggerNumberInArray(array);

      // assert
      expect(biggerNumber).toBe(10);
    });
  });

  describe('getPropertyInArray', () => {
    it('should return the property in the array - string', () => {
      // arrange
      const property = 'name';
      const array = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ];

      // act
      const propertyInArray = getPropertyInArray(array, property);

      // assert
      expect(propertyInArray).toEqual(['John Doe', 'Jane Doe']);
    });

    it('should return the property in the array - number', () => {
      // arrange
      const property = 'id';
      const array = [
        { id: 1, name: 'Jane Doe' },
        { id: 2, name: 'John Doe' }
      ];

      // act
      const propertyInArray = getPropertyInArray(array, property);

      // assert
      expect(propertyInArray).toEqual([1, 2]);
    });
  });
});
