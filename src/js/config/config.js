/*global __ENV__*/
export default class Config {
}
Config.WEB_DOMAIN = 'www.swingvy.com';
Config.API_DOMAIN = 'www.swingvy.com/api';
Config.PHASE = (typeof __ENV__ === 'undefined')? 'local' : __ENV__.phase;
Config.VERSION = (typeof __ENV__ === 'undefined')? 'v1' : __ENV__.version;
