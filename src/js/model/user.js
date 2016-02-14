import Backbone from 'backbone';
import ConfigUtil from 'js/config/configUtil';

export default class User extends Backbone.Model {
  constructor(options) {
    super(options);
    this.urlRoot = User.URL_ROOT;
    this.idAttribute = 'no';
    this.parse = function(response) {
      return response.data;
    };
  }

  defaults() {
    return {
      no: null,
      name: null,
      email: null
    };
  }

  toString() {
    return JSON.stringify(this);
  }
}

User.URL_ROOT = 'http://' + ConfigUtil.getApiUrl() + '/users';
