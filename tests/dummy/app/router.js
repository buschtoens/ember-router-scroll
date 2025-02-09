import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

class Router extends RouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('next-page');
  this.route('target');
  this.route('target-next-page');
});

export default Router;
