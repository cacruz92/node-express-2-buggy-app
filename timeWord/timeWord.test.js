const { timeWord } = require('./timeWord');

console.log(timeWord);


describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('converts midnight correctly', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });

  test('converts noon correctly', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('converts to qm correctly', () => {
    expect(timeWord('6:20')).toBe('six twenty am');
    expect(timeWord('11:45')).toBe('eleven forty five am');
  });

  test('converts to pm correctly', () => {
    expect(timeWord('16:20')).toBe('four twenty pm');
    expect(timeWord('23:45')).toBe('eleven forty five pm');
  });

  test('converts single digit minutes', () => {
    expect(timeWord('16:05')).toBe('four oh five pm');
    expect(timeWord('11:06')).toBe('eleven oh six am');
  });

});