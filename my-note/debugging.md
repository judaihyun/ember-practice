

# Debugging

## Routing

https://guides.emberjs.com/v3.15.0/configuring-ember/debugging/


- Log router transitions

``` app/app.js
import Application from '@ember/application';

export default Application.extend({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true
});
```

- Log view lookups

``` config/environment.js
ENV.APP.LOG_VIEW_LOOKUPS = true;
```

## Models

- Use the `{{debugger}}` or `{{log}}` helper to inspect the `{{@model}}` from the template

https://api.emberjs.com/ember/release/classes/Ember.Templates.helpers/methods/debugger?anchor=debugger

chrome console에서 get('@model');와 같은 식으로 사용.