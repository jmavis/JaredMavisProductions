"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('jared-mavis-productions-content/app', ['exports', 'ember', 'jared-mavis-productions-content/resolver', 'ember-load-initializers', 'jared-mavis-productions-content/config/environment'], function (exports, _ember, _jaredMavisProductionsContentResolver, _emberLoadInitializers, _jaredMavisProductionsContentConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _jaredMavisProductionsContentConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jaredMavisProductionsContentConfigEnvironment['default'].podModulePrefix,
    Resolver: _jaredMavisProductionsContentResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _jaredMavisProductionsContentConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('jared-mavis-productions-content/components/people-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('jared-mavis-productions-content/helpers/app-version', ['exports', 'ember', 'jared-mavis-productions-content/config/environment'], function (exports, _ember, _jaredMavisProductionsContentConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _jaredMavisProductionsContentConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('jared-mavis-productions-content/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('jared-mavis-productions-content/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('jared-mavis-productions-content/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jared-mavis-productions-content/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _jaredMavisProductionsContentConfigEnvironment) {
  var _config$APP = _jaredMavisProductionsContentConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('jared-mavis-productions-content/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('jared-mavis-productions-content/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('jared-mavis-productions-content/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('jared-mavis-productions-content/initializers/export-application-global', ['exports', 'ember', 'jared-mavis-productions-content/config/environment'], function (exports, _ember, _jaredMavisProductionsContentConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_jaredMavisProductionsContentConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _jaredMavisProductionsContentConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_jaredMavisProductionsContentConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('jared-mavis-productions-content/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('jared-mavis-productions-content/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('jared-mavis-productions-content/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("jared-mavis-productions-content/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('jared-mavis-productions-content/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('jared-mavis-productions-content/router', ['exports', 'ember', 'jared-mavis-productions-content/config/environment'], function (exports, _ember, _jaredMavisProductionsContentConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _jaredMavisProductionsContentConfigEnvironment['default'].locationType,
    rootURL: _jaredMavisProductionsContentConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('scientists');
  });

  exports['default'] = Router;
});
define('jared-mavis-productions-content/routes/scientists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    }
  });
});
define('jared-mavis-productions-content/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("jared-mavis-productions-content/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ouyFJyD1", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"PeopleTracker\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "jared-mavis-productions-content/templates/application.hbs" } });
});
define("jared-mavis-productions-content/templates/components/people-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "bleZPdkt", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"people\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"person\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"person\"]}],\"hasPartials\":false}", "meta": { "moduleName": "jared-mavis-productions-content/templates/components/people-list.hbs" } });
});
define("jared-mavis-productions-content/templates/scientists", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ls9vzHiy", "block": "{\"statements\":[[\"append\",[\"helper\",[\"people-list\"],null,[[\"title\",\"people\"],[\"List of Scientists\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "jared-mavis-productions-content/templates/scientists.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('jared-mavis-productions-content/config/environment', ['ember'], function(Ember) {
  var prefix = 'jared-mavis-productions-content';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("jared-mavis-productions-content/app")["default"].create({"name":"jared-mavis-productions-content","version":"0.0.0+797006a4"});
}

/* jshint ignore:end */
//# sourceMappingURL=jared-mavis-productions-content.map
