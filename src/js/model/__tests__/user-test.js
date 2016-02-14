jest.autoMockOff()
  .mock('jquery');

describe('user', function() {
  it('is converted to string', function() {
    var User = require('../user').default,
      user = new User({no: 1, name: 'name', email: 'email'});
    expect(user.toString()).toBe('{"no":1,"name":"name","email":"email"}');
  });
  it('can be saved', function() {
    var User = require('../user').default,
      $ = require('jquery'),
      user = new User({name: 'name', email: 'email'}),
      callback = jest.genMockFunction();

    user.save(null, {success:callback});
    $.ajax.mock.calls[0][0].success({
      code: 0,
      data: {
        no: 100,
        name: 'name',
        email: 'email'
      }
    });
    expect(callback.mock.calls[0][0].get('no')).toBe(100);
    expect(callback.mock.calls[0][0].get('name')).toBe('name');
    expect(callback.mock.calls[0][0].get('email')).toBe('email');
  });
});
