const getTheGroups = require('./challenge'); // Asegúrate de proporcionar la ruta correcta
const assert = require('assert');

describe('getTheGroups tests', function() {
  it('Should return 3 when the students 1 & 2 are friends, and asked for the total friends of 2 y 3', function() {
    const n = 3;
    const queryType = ['Friend', 'Total'];
    const student1 = [1, 2];
    const student2 = [2, 3];

    const result = getTheGroups(n, queryType, student1, student2);

    assert(result == [3]);
  });

  it('Should return 3 when the students 1 & 2 are friends, and asked for the total friends of 2 y 3', function() {
    assert(getTheGroups(4, ['Friend', 'Friend', 'Total'], [1, 2, 1], [2, 3, 4]) == [4])
  });

});
