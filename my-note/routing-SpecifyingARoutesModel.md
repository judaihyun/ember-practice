
# Specifying a Route's Model

A route's JS file is one of the best places in an app to make requests to an API.

예를들어 아래와 같이 router가 존재.

``` app/router.js
Router.map(function() {
  this.route('favorite-posts');
});
```

유저가 `/favorite-posts`를 방문하면 `model`은 아래의 js파일의 hook한다.

``` app/routes/favorites-posts.js
import Route from '@ember/routing/route';

export default class FavoritePostsRoute extends Route {
  model() {
    console.log('The model hook just ran!');
    return 'Hello Ember!';
  }
}
```
