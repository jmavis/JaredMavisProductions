'use strict';

define('jared-mavis-productions-content/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/components/people-list.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/people-list.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/people-list.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('jared-mavis-productions-content/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'jared-mavis-productions-content/tests/helpers/start-app', 'jared-mavis-productions-content/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _jaredMavisProductionsContentTestsHelpersStartApp, _jaredMavisProductionsContentTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _jaredMavisProductionsContentTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _jaredMavisProductionsContentTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('jared-mavis-productions-content/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/helpers/resolver', ['exports', 'jared-mavis-productions-content/resolver', 'jared-mavis-productions-content/config/environment'], function (exports, _jaredMavisProductionsContentResolver, _jaredMavisProductionsContentConfigEnvironment) {

  var resolver = _jaredMavisProductionsContentResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jaredMavisProductionsContentConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jaredMavisProductionsContentConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('jared-mavis-productions-content/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/helpers/start-app', ['exports', 'ember', 'jared-mavis-productions-content/app', 'jared-mavis-productions-content/config/environment'], function (exports, _ember, _jaredMavisProductionsContentApp, _jaredMavisProductionsContentConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _jaredMavisProductionsContentConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _jaredMavisProductionsContentApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('jared-mavis-productions-content/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/integration/components/people-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('people-list', 'Integration | Component | people list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'KVMFQL0j',
      'block': '{"statements":[["append",["unknown",["people-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'JpDJYv4j',
      'block': '{"statements":[["text","\\n"],["block",["people-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('jared-mavis-productions-content/tests/integration/components/people-list-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/people-list-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/people-list-test.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/routes/scientists.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/scientists.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/scientists.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/test-helper', ['exports', 'jared-mavis-productions-content/tests/helpers/resolver', 'ember-qunit'], function (exports, _jaredMavisProductionsContentTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_jaredMavisProductionsContentTestsHelpersResolver['default']);
});
define('jared-mavis-productions-content/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('jared-mavis-productions-content/tests/unit/routes/scientists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:scientists', 'Unit | Route | scientists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jared-mavis-productions-content/tests/unit/routes/scientists-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/scientists-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/scientists-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('jared-mavis-productions-content/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
