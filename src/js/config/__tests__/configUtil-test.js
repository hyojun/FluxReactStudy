jest.autoMockOff();

describe('configUtil', function() {
  it('generates properties from config object', function() {
    var ConfigUtil = require('../configUtil').default;
    expect(ConfigUtil.getApiUrl()).toBe('local-www.swingvy.com/api/v1');
  });
});
