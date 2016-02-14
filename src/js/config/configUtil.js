import Config from './config';

export default class ConfigUtil {
  static getApiUrl() {
    let url = '';
    url += Config.PHASE ? (Config.PHASE + '-') : '';
    url += Config.API_DOMAIN;
    url += '/' + Config.VERSION;
    return url;
  }
}
