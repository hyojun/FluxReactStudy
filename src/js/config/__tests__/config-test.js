jest.autoMockOff();

describe('config', function() {
  it('has static member variables', function() {
    var Config1 = require('../config').default;
    expect(Config1.PHASE).toBe('local');
    Config1.PHASE = 'release';
    var Config2 = require('../config').default;
    expect(Config2.PHASE).toBe('release');
  });
});
