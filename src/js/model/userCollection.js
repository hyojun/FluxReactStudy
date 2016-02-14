import Backbone from 'backbone';
import User from './user';

export default class UserCollection extends Backbone.Collection {
  constructor(options) {
    super(options);

    this.model = User;

    this.url = User.URL_ROOT;

    this.parse = function(response) {
      return response.data;
    };
  }

  toString() {
    return JSON.stringify(this);
  }
}
