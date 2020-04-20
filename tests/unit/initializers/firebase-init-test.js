import Application from '@ember/application';

import { initialize } from 'my-rentals/initializers/firebase-init';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | firebase-init', function(hooks) {
  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'firebase',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function(assert) {
    await this.application.boot();
    assert.ok(true);
  });
});
